import { Link } from "@tanstack/react-router";

const Header = () => {
  return (
    <header className="bg-background/80 border-b backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link
          to="/"
          className="text-foreground text-lg font-semibold tracking-tight"
        >
          Image BG Remover
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-2 text-sm">
          <Link
            to="/"
            className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-md px-3 py-1.5 transition-colors"
            activeProps={{
              className:
                "rounded-md px-3 py-1.5 font-semibold text-foreground bg-muted border border-border",
            }}
          >
            Home
          </Link>

          <Link
            to="/projects"
            className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-md px-3 py-1.5 transition-colors"
            activeProps={{
              className:
                "rounded-md px-3 py-1.5 font-semibold text-foreground bg-muted border border-border",
            }}
          >
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
