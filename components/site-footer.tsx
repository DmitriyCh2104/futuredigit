import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Madison</h3>
            <p className="text-sm text-muted-foreground">
              Empowering businesses with innovative technology solutions
            </p>
            <div className="flex space-x-4">{/* Social Media Icons */}</div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Modes d'intervention</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/modes/conseil" className="text-sm text-muted-foreground hover:text-primary">
                  Conseil
                </Link>
              </li>
              <li>
                <Link href="/modes/regie" className="text-sm text-muted-foreground hover:text-primary">
                  Regie
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Business Units</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/business-units/banque-finance" className="text-sm text-muted-foreground hover:text-primary">
                  Banque Finance
                </Link>
              </li>
              <li>
                <Link href="/business-units/ingenierie" className="text-sm text-muted-foreground hover:text-primary">
                  Ingénierie
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                58, rue Monceau 75008 Paris
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <Link href="mailto:contact@future-digit.com" className="text-sm text-muted-foreground hover:text-primary">
                  contact@future-digit.com
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <Link href="tel:+33167074191" className="text-sm text-muted-foreground hover:text-primary">
                  01 67 07 41 91
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 pb-8 border-t space-y-4">
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Future Digit. Tous droits réservés.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground pb-4">
            <Link href="/" className="hover:text-primary">
              Mentions légales
            </Link>
            <span>|</span>
            <Link href="/" className="hover:text-primary">
              Politique de confidentialité
            </Link>
            <span>|</span>
            <Link href="/" className="hover:text-primary">
              Politique des cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
