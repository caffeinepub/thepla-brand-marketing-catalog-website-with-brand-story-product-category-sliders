import { Link, useNavigate } from '@tanstack/react-router';
import { useBrand } from './BrandProvider';
import { Menu, X, Edit2, Upload } from 'lucide-react';
import { useState, useRef } from 'react';

export default function Header() {
  const { brandName, logoUrl, setBrandName, setLogoUrl } = useBrand();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(brandName);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setLogoUrl(url);
    }
  };

  const handleSaveName = () => {
    if (tempName.trim()) {
      setBrandName(tempName.trim());
    }
    setIsEditingName(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand Name */}
          <Link to="/" className="flex items-center gap-3 group">
            <div 
              className="relative w-12 h-12 rounded-lg overflow-hidden bg-primary/10 flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                fileInputRef.current?.click();
              }}
            >
              {logoUrl ? (
                <img src={logoUrl} alt="Logo" className="w-full h-full object-cover" />
              ) : (
                <Upload className="w-5 h-5 text-primary" />
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleLogoUpload}
            />
            
            {isEditingName ? (
              <div className="flex items-center gap-2" onClick={(e) => e.preventDefault()}>
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  onBlur={handleSaveName}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSaveName();
                    if (e.key === 'Escape') {
                      setTempName(brandName);
                      setIsEditingName(false);
                    }
                  }}
                  className="text-xl font-bold text-foreground bg-transparent border-b-2 border-primary outline-none px-1"
                  autoFocus
                />
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-foreground">{brandName}</h1>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setTempName(brandName);
                    setIsEditingName(true);
                  }}
                  className="p-1 hover:bg-primary/10 rounded transition-colors"
                >
                  <Edit2 className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/categories" 
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Products
            </Link>
            <Link 
              to="/faq" 
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              FAQ
            </Link>
            <Link 
              to="/contact" 
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:bg-primary/10 rounded-lg transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/categories" 
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:bg-primary/10 rounded-lg transition-colors"
              >
                Products
              </Link>
              <Link 
                to="/faq" 
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:bg-primary/10 rounded-lg transition-colors"
              >
                FAQ
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:bg-primary/10 rounded-lg transition-colors"
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
