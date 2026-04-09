describe('Garden Management Tasks', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    jest.resetModules(); // Reset modules before each test
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('should print "Watering on" if temperature is greater than 80', () => {
    require('../gardenManagement'); // Requiring the file should execute the code
    expect(consoleSpy).toHaveBeenCalledWith('Watering on');
  });

  test('should print "Lights off" if timeOfDay is morning', () => {
    require('../gardenManagement'); // Requiring the file should execute the code
    expect(consoleSpy).toHaveBeenCalledWith('Lights off');
  });

  test('should increment soilMoisture to 40 using a while loop', () => {
    require('../gardenManagement'); // Requiring the file should execute the code
    expect(consoleSpy).toHaveBeenCalledWith(40); // Check that the final value of soilMoisture is 40
  });
});
