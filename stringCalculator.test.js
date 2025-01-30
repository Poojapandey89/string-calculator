import { add } from "./stringCalculator.js";

describe('String Calculator Tests', () => {

    it('should return 0 for empty string', () => {
      expect(add("")).toBe(0);
    });
  
    it('should return the sum of any numbers', () => {
      expect(add("1")).toBe(1);
      expect(add("2,5")).toBe(7);
      expect(add("1,9,2")).toBe(12);
      expect(add("1,2,3,4,5,6")).toBe(21);
    });

    it('should handle newlines between numbers', () => {
      expect(add("4\n5\n6")).toBe(15);
      expect(add("2\n1,5")).toBe(8);
    });
  
    it('should support different delimiters', () => {
      expect(add("//;\n1;2")).toBe(3);
      expect(add("//:\n2:3|:4")).toBe(9);
    });
});