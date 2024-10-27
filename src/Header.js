/** @format */
// Defines a Header component that takes `props` as an argument
function Header(props) {
    return (
        // Returns a header element with the heading text passed as a prop
        <header className="App-header">
            <h1>{props.headingText}</h1>
        </header>
    );
}
// Exports the Header component to be imported in other files
export default Header;
