import { GetListingsResponse } from '../types/Listings.type';

// Add a function to get Listing from dummy data
async function getListings(): Promise<GetListingsResponse> {
  return {
    success: false
  };
}

export { getListings };
