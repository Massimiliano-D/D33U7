import React from "react";

function MyFooter() {
  return (
    <footer className="text-center py-3">
      <p>&copy; {new Date().getFullYear()} My Shop</p>
    </footer>
  );
}

export default MyFooter;
