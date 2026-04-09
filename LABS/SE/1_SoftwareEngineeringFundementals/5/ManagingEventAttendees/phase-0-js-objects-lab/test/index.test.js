const {
    attendee,
    logAttendeeName,
    logTicketPrice,
    updateTicketType,
    updateTicketPrice,
    removeEventProperty,
    addCheckedInProperty
  } = require('../index');
  
  describe('attendee object', () => {
    test('should have correct properties and values', () => {
      expect(attendee).toHaveProperty('attendeeId', 'T001');
      expect(attendee).toHaveProperty('name', 'Alice Smith');
      expect(attendee).toHaveProperty('event', 'JavaScript Conference');
      expect(attendee).toHaveProperty('ticketType', 'VIP');
      expect(attendee).toHaveProperty('ticketPrice', 150.00);
    });
  });
  
  describe('logAttendeeName function', () => {
    const mockAttendee = { name: 'Alice Smith' };
  
    test('should log the name of the attendee', () => {
      console.log = jest.fn(); 
      logAttendeeName(mockAttendee);
      expect(console.log).toHaveBeenCalledWith('Alice Smith');
    });
  });
  
  describe('logTicketPrice function', () => {
    const mockAttendee = { ticketPrice: 150.00 };
  
    test('should log the ticket price of the attendee', () => {
      console.log = jest.fn(); 
      logTicketPrice(mockAttendee);
      expect(console.log).toHaveBeenCalledWith(150.00);
    });
  });
  
  describe('updateTicketType function', () => {
    const mockAttendee = { ticketType: 'VIP' };
  
    test('should update the ticket type of the attendee', () => {
      updateTicketType(mockAttendee, 'General');
      expect(mockAttendee.ticketType).toBe('General');
    });
  });
  
  describe('updateTicketPrice function', () => {
    const mockAttendee = { ticketPrice: 150.00 };
  
    test('should update the ticket price of the attendee', () => {
      updateTicketPrice(mockAttendee, 200.00);
      expect(mockAttendee.ticketPrice).toBe(200.00);
    });
  });
  
  describe('removeEventProperty function', () => {
    const mockAttendee = { event: 'JavaScript Conference' };
  
    test('should remove the event property from the attendee', () => {
      removeEventProperty(mockAttendee);
      expect(mockAttendee).not.toHaveProperty('event');
    });
  });
  
  describe('addCheckedInProperty function', () => {
    const mockAttendee = {};
  
    test('should add the checkedIn property to the attendee', () => {
      addCheckedInProperty(mockAttendee);
      expect(mockAttendee).toHaveProperty('checkedIn', true);
    });
  });
  