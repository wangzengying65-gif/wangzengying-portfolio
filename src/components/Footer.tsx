export default function Footer() {
  return (
    <footer className="py-12 px-6 text-center">
      <p className="text-xs text-apple-black/20 dark:text-apple-white/20">
        &copy; {new Date().getFullYear()} Zengying Wang. All rights reserved.
      </p>
    </footer>
  );
}
