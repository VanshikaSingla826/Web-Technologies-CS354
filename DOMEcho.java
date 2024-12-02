// Compile and run commands:
// javac DOMEcho.java
// java DOMEcho -xsdss P3.xsd P3.xml

// JAXP packages
import javax.xml.parsers.*;
import org.xml.sax.*;
import org.xml.sax.helpers.*;
import org.w3c.dom.*;
import java.io.*;

/**
 * This is a program to echo a DOM tree using DOM Level 2 interfaces.
 * Use JAXP to load an XML file and create a DOM tree.
 *
 * This program also shows how to validate a document along with using an
 * ErrorHandler to capture validation errors.
 *
 * @author Edwin Goei
 */
public class DOMEcho {
    static final String outputEncoding = "UTF-8";  // All output will use this encoding
    private PrintWriter out;                       // Output goes here
    private int indent = 0;                        // Indent level
    private final String basicIndent = " ";        // Indentation will be in multiples of basicIndent

    static final String JAXP_SCHEMA_LANGUAGE = "http://java.sun.com/xml/jaxp/properties/schemaLanguage";
    static final String W3C_XML_SCHEMA = "http://www.w3.org/2001/XMLSchema";
    static final String JAXP_SCHEMA_SOURCE = "http://java.sun.com/xml/jaxp/properties/schemaSource";

    DOMEcho(PrintWriter out) {
        this.out = out;
    }

    private void printlnCommon(Node n) {
        out.print(" nodeName=\"" + n.getNodeName() + "\"");
        String val = n.getNamespaceURI();
        if (val != null) out.print(" uri=\"" + val + "\"");
        val = n.getPrefix();
        if (val != null) out.print(" pre=\"" + val + "\"");
        val = n.getLocalName();
        if (val != null) out.print(" local=\"" + val + "\"");
        val = n.getNodeValue();
        if (val != null) {
            out.print(" nodeValue=");
            if (val.trim().equals("")) {
                out.print("[WS]");  // Whitespace
            } else {
                out.print("\"" + n.getNodeValue() + "\"");
            }
        }
        out.println();
    }

    private void outputIndentation() {
        for (int i = 0; i < indent; i++) {
            out.print(basicIndent);
        }
    }

    private void echo(Node n) {
        outputIndentation();
        int type = n.getNodeType();
        switch (type) {
            case Node.ATTRIBUTE_NODE:
                out.print("ATTR:"); printlnCommon(n);
                break;
            case Node.CDATA_SECTION_NODE:
                out.print("CDATA:"); printlnCommon(n);
                break;
            case Node.COMMENT_NODE:
                out.print("COMM:"); printlnCommon(n);
                break;
            case Node.DOCUMENT_FRAGMENT_NODE:
                out.print("DOC_FRAG:"); printlnCommon(n);
                break;
            case Node.DOCUMENT_NODE:
                out.print("DOC:"); printlnCommon(n);
                break;
            case Node.DOCUMENT_TYPE_NODE:
                out.print("DOC_TYPE:"); printlnCommon(n);
                NamedNodeMap nodeMap = ((DocumentType) n).getEntities();
                indent += 2;
                for (int i = 0; i < nodeMap.getLength(); i++) {
                    Entity entity = (Entity) nodeMap.item(i);
                    echo(entity);
                }
                indent -= 2;
                break;
            case Node.ELEMENT_NODE:
                out.print("ELEM:"); printlnCommon(n);
                NamedNodeMap atts = n.getAttributes();
                indent += 2;
                for (int i = 0; i < atts.getLength(); i++) {
                    Node att = atts.item(i);
                    echo(att);
                }
                indent -= 2;
                break;
            case Node.ENTITY_NODE:
                out.print("ENT:"); printlnCommon(n);
                break;
            case Node.ENTITY_REFERENCE_NODE:
                out.print("ENT_REF:"); printlnCommon(n);
                break;
            case Node.NOTATION_NODE:
                out.print("NOTATION:"); printlnCommon(n);
                break;
            case Node.PROCESSING_INSTRUCTION_NODE:
                out.print("PROC_INST:"); printlnCommon(n);
                break;
            case Node.TEXT_NODE:
                out.print("TEXT:"); printlnCommon(n);
                break;
            default:
                out.print("UNSUPPORTED NODE: " + type); printlnCommon(n);
                break;
        }
        indent++;
        for (Node child = n.getFirstChild(); child != null; child = child.getNextSibling()) {
            echo(child);
        }
        indent--;
    }

    private static void usage() {
        System.err.println("Usage: DOMEcho [-options] <file.xml>");
        System.err.println(" -dtd = DTD validation");
        System.err.println(" -xsd | -xsdss <file.xsd> = W3C XML Schema validation");
        System.err.println(" -ws = do not create element content whitespace nodes");
        System.err.println(" -co[mments] = do not create comment nodes");
        System.err.println(" -cd[ata] = put CDATA into Text nodes");
        System.err.println(" -e[ntity-ref] = create EntityReference nodes");
        System.err.println(" -usage or -help = this message");
        System.exit(1);
    }

    public static void main(String[] args) throws Exception {
        String filename = null;
        boolean dtdValidate = false;
        boolean xsdValidate = false;
        String schemaSource = null;
        boolean ignoreWhitespace = false;
        boolean ignoreComments = false;
        boolean putCDATAIntoText = false;
        boolean createEntityRefs = false;

        for (int i = 0; i < args.length; i++) {
            switch (args[i]) {
                case "-dtd": dtdValidate = true; break;
                case "-xsd": xsdValidate = true; break;
                case "-xsdss": if (i == args.length - 1) usage(); xsdValidate = true; schemaSource = args[++i]; break;
                case "-ws": ignoreWhitespace = true; break;
                case "-co": ignoreComments = true; break;
                case "-cd": putCDATAIntoText = true; break;
                case "-e": createEntityRefs = true; break;
                case "-usage": case "-help": usage(); break;
                default: filename = args[i]; if (i != args.length - 1) usage(); break;
            }
        }

        if (filename == null) usage();

        DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
        dbf.setNamespaceAware(true);
        dbf.setValidating(dtdValidate || xsdValidate);

        if (xsdValidate) {
            try {
                dbf.setAttribute(JAXP_SCHEMA_LANGUAGE, W3C_XML_SCHEMA);
            } catch (IllegalArgumentException x) {
                System.err.println("Error: JAXP DocumentBuilderFactory attribute not recognized.");
                System.exit(1);
            }
        }

        if (schemaSource != null) dbf.setAttribute(JAXP_SCHEMA_SOURCE, new File(schemaSource));
        dbf.setIgnoringComments(ignoreComments);
        dbf.setIgnoringElementContentWhitespace(ignoreWhitespace);
        dbf.setCoalescing(putCDATAIntoText);
        dbf.setExpandEntityReferences(!createEntityRefs);

        DocumentBuilder db = dbf.newDocumentBuilder();
        OutputStreamWriter errorWriter = new OutputStreamWriter(System.err, outputEncoding);
        db.setErrorHandler(new MyErrorHandler(new PrintWriter(errorWriter, true)));

        Document doc = db.parse(new File(filename));
        new DOMEcho(new PrintWriter(new OutputStreamWriter(System.out, outputEncoding), true)).echo(doc);
    }

    private static class MyErrorHandler implements ErrorHandler {
        private PrintWriter out;

        MyErrorHandler(PrintWriter out) {
            this.out = out;
        }

        private String getParseExceptionInfo(SAXParseException spe) {
            String systemId = spe.getSystemId() == null ? "null" : spe.getSystemId();
            return "URI=" + systemId + " Line=" + spe.getLineNumber() + ": " + spe.getMessage();
        }

        public void warning(SAXParseException spe) throws SAXException {
            out.println("Warning: " + getParseExceptionInfo(spe));
        }

        public void error(SAXParseException spe) throws SAXException {
            out.println("Error: " + getParseExceptionInfo(spe));
        }

        public void fatalError(SAXParseException spe) throws SAXException {
            out.println("Fatal Error: " + getParseExceptionInfo(spe));
        }
    }
}
