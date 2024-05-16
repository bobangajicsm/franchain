import "./Footer.css";
import Box from "./components/Box/Box";

const Footer: React.FC = () => {
  return (
    <footer className="footer-wrapper text-center">
      <h3 className="footer-wrapper-title font-medium text-black">
        Need assistance?
      </h3>
      <div className="flex boxes-wrapper">
        <Box>Inviting an operator</Box>
        <Box>Assigning a location</Box>
        <Box>Setting up auto withdrawals</Box>
      </div>
      <a className="footer-link" href="#">
        Or visit our knowledge base
      </a>
    </footer>
  );
};

export default Footer;
