import { useEffect } from "react";
import { getListings } from "../../api/ListingApi";

// Create a home page that displays all listings from dummy data

export default function HomePage() {
  useEffect(() => {
    getListings();
  }, []);
  return <>This is a home page</>;
}
 