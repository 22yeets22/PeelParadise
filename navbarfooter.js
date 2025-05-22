const navbar = `
<nav>
    <a href="index.html">
        <img class="logo" src="logo-removebg-preview.png" alt="Peel Paradise Logo" />
    </a>
    <a href="products.html">Products</a>
    <a href="cart.html">Cart</a>
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
</nav>
`;
const footer = `
<footer>
    <p>&copy; 2014 Peel Paradise Banana Shop | From Farm to Table</p>
    <p>Email: <a href="mailto: support@peelparadise.com">support@peelparadise.com</a></p>
    <p>Phone: <a href="tel: 1234567890">+1 (123) 456-7890</a></p>
    <p>Address: 7182 Paradise Way, Miami, FL 33145</p>
</footer>
`;

window.onload = function() {
    var newNavbar = document.createElement('div');
    newNavbar.innerHTML = navbar;
    document.body.insertBefore(newNavbar, document.body.firstChild);

    var newFooter = document.createElement('div');
    newFooter.innerHTML = footer;
    document.body.appendChild(newFooter);
};
