import { Hotels } from "./hotels";

describe("Hotel searching", () => {

  const testData = {
    hotelId: 1,
    checkIn: '2024-05-05',
    checkOut: '2024-05-07',
    numberOfGuests: 2,
    numberOfRooms: 1,
    currency: 'USD'
  }

  test("Get all hotels", async () => {
    const hotelSearch = new Hotels();

    const hotels = await hotelSearch.getAllReservations(testData);
    expect(hotels).toHaveProperty("rooms");
  });

  test("deberia ser un arreglo mayor a 0", async () => {
    const hotelSearch = new Hotels();

    const hotels = await hotelSearch.getAllReservations(testData);

    expect(hotels.rooms.length).toBeGreaterThan(0);
  });

  test("deberia contener la propiedad roomDd", async () => {
    const hotelSearch = new Hotels();

    const hotels = await hotelSearch.getAllReservations(testData);
    expect(hotels.rooms[0]).toHaveProperty("roomId");
  });

  test("deberia contener la propiedad rates", async () => {
    const hotelSearch = new Hotels();

    const hotels = await hotelSearch.getAllReservations(testData);
    expect(hotels.rooms[0]).toHaveProperty("rates");
  });

  test("deberia ser un array de minimo un elemento", async () => {
    const hotelSearch = new Hotels();

    const hotels = await hotelSearch.getAllReservations(testData);
    expect(hotels.rooms[0].rates.length).toBeGreaterThan(0);
  })

  test("deberia contener la propiedad mealPlanId", async () => {
    const hotelSearch = new Hotels();

    const hotels = await hotelSearch.getAllReservations(testData);
    expect(hotels.rooms[0].rates[0]).toHaveProperty("mealPlanId");
  });

  test("deberia contener la propiedad isCancellable", async () => {
    const hotelSearch = new Hotels();

    const hotels = await hotelSearch.getAllReservations(testData);
    expect(hotels.rooms[0].rates[0]).toHaveProperty("isCancellable");
  });

  test("deberia contener la propiedad price", async () => {
    const hotelSearch = new Hotels();

    const hotels = await hotelSearch.getAllReservations(testData);
    expect(hotels.rooms[0].rates[0]).toHaveProperty("price");
  });
});
