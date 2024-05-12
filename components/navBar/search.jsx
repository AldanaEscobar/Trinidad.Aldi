import { Button, Form } from "react-bootstrap";
import SearchIcon from "../../src/assets/icons/SearchIcon";

const Search = () => {
    return (
      <div className="d-flex align-items-center">
        <Form className="d-flex search-container">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 search-input"
            aria-label="Search"
          />
          <Button variant="outline-success search-button">
            <SearchIcon />
          </Button>
        </Form>
      </div>
    );
  };
  
  export default Search;