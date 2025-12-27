export function Footer() {
  return (
    <footer id="footer" className="footer-section">
      <div className="page-container">
        <div className="footer-grid">
          <div>
            <div className="text-2xl font-bold footer-column-title">
              Micro<span className="text-[#39ff14]">BNG</span>
            </div>
            <p className="text-gray-400 text-sm footer-brand-desc">
              Software-Defined Broadband Network Gateway powered by VPP and DPDK
            </p>
          </div>
          <div>
            <h4 className="footer-column-title">Product</h4>
            <ul className="footer-links text-gray-400 text-sm">
              <li><a href="#features" className="hover:text-[#39ff14] transition-colors">Features</a></li>
              <li><a href="#scalability" className="hover:text-[#39ff14] transition-colors">Scalability</a></li>
              <li><a href="#pricing" className="hover:text-[#39ff14] transition-colors">Pricing</a></li>
              <li><a href="#use-cases" className="hover:text-[#39ff14] transition-colors">Use Cases</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-column-title">Resources</h4>
            <ul className="footer-links text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-[#39ff14] transition-colors">Documentation</a></li>
              <li><a href="#about" className="hover:text-[#39ff14] transition-colors">Architecture</a></li>
              <li><a href="#cta" className="hover:text-[#39ff14] transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="footer-column-title">Connect</h4>
            <ul className="footer-links text-gray-400 text-sm">
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#39ff14] transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#39ff14] transition-colors">GitHub</a></li>
              <li><a href="mailto:asad@nixroute.aw" className="hover:text-[#39ff14] transition-colors">Email</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} MicroBNG by Nix Route Technologies</p>
          <p className="mt-2 text-xs">
            Crafted by{" "}
            <a
              href="https://linkedin.com/in/reachvivek"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#39ff14]/70 hover:text-[#39ff14] transition-colors"
            >
              Vivek Singh
            </a>
            {" • "}
            <a
              href="https://reachvivek.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#39ff14]/70 hover:text-[#39ff14] transition-colors"
            >
              Portfolio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
