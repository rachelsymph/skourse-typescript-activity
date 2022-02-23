import { GetListingsResponse } from "../types/Listings.type";
import { data } from "../data.js";

// Add a function to get Listing from dummy data
async function getListings(): Promise<GetListingsResponse> {
  return {
    success: true,
    data: data
  };
}

export { getListings };
