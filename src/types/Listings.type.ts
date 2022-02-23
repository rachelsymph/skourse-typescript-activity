type Listing = {
  id: string;
  listing_url: string;
  name: string;
  description: string;
  picture_url: string;
  host_name: string;
  property_type: string;
  room_type: string;
  accommodates: string;
  bathrooms_text: string;
  bedrooms: string;
  beds: string;
  amenities: string;
  price: string;
};

type GetListingsResponse = {
  success: boolean;
  data?: Listing[];
};

export { Listing, GetListingsResponse };
