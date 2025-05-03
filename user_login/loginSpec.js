describe("Login Validation", function() {
    it("should return error for empty fields", function() {
      expect(validateLogin("", "")).toBe("Fields cannot be empty");
    });
  
    it("should return error for invalid email", function() {
      expect(validateLogin("userexample.com", "password123")).toBe("Invalid email");
    });
  
    it("should return error for short password", function() {
      expect(validateLogin("user@example.com", "123")).toBe("Password too short");
    });

    it("should return error for short password", function() {
    expect(validateLogin("user@example.com", "123")).toBe("Password too short");
    });
  
  
    it("should return success for valid inputs", function() {
      expect(validateLogin("user@example.com", "password123")).toBe("Login successful");
    });
  });
  