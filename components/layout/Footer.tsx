export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 py-12 mt-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-primary font-space tracking-tight mb-4">
              Nidavi<span className="text-accent-foreground"></span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Moderne Markengestaltung und Webdesign für Handwerksunternehmen und kleine Firmen.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Leistungen</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Markengestaltung</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Webdesign</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Marketing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Verpackungsdesign</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Ressourcen</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Fallstudien</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Werkzeuge</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Kontakt</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">info@Nidavi.de</li>
              <li className="text-muted-foreground">+49 (0) 123 456 789</li>
              <li className="text-muted-foreground">Musterstraße 123</li>
              <li className="text-muted-foreground">10115 Berlin, Deutschland</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">&copy; {currentYear} Nidavi. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Impressum</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Datenschutz</a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
}