import { Hotels } from "./hotels";

describe("Hotel searching", () => {

  test("Get all hotels", async () => {
    const hotelSearch = new Hotels();

    const hotels = await hotelSearch.getAllHotels("hotel");
    expect(hotels).toHaveProperty("results");
  });

  test("deberia ser un arreglo mayor a 0", async () => {
    const hotelSearch = new Hotels();

    const hotels = await hotelSearch.getAllHotels("hotel");

    expect(hotels.results.length).toBeGreaterThan(0);
  });

  test("deberia contener la propiedad id", async () => {
    const hotelSearch = new Hotels();

    const hotels = await hotelSearch.getAllHotels("hotel");
    expect(hotels.results[0]).toHaveProperty("id");
  });

  test("deberia contener la propiedad hotelName", async () => {
    const hotelSearch = new Hotels();

    const hotels = await hotelSearch.getAllHotels("hotel");
    expect(hotels.results[0]).toHaveProperty("hotelName");
  });

  test("deberia contener la propiedad location", async () => {
    const hotelSearch = new Hotels();

    const hotels = await hotelSearch.getAllHotels("hotel");
    expect(hotels.results[0]).toHaveProperty("location");
  });

  test("deberia contener la propiedad country", async () => {
    const hotelSearch = new Hotels();

    const hotels = await hotelSearch.getAllHotels("hotel");

    expect(hotels.results[0]).toHaveProperty("country");
  });
});
