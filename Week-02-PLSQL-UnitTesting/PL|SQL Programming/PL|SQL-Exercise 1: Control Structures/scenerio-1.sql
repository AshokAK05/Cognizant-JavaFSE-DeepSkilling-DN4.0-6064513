DECLARE
   CURSOR senior_customers IS
      SELECT c.CustomerID, l.LoanID, l.InterestRate, c.DOB
      FROM Customers c
      JOIN Loans l ON c.CustomerID = l.CustomerID;
      v_age NUMBER;
BEGIN
   FOR i IN senior_customers LOOP
      v_age := TRUNC(MONTHS_BETWEEN(SYSDATE, i.DOB) / 12);

      IF v_age > 60 THEN
         UPDATE Loans
         SET InterestRate = InterestRate - 1
         WHERE LoanID = i.LoanID;
         DBMS_OUTPUT.PUT_LINE('LoanID got Discounts: ' || i.LoanID);
      END IF;
   END LOOP;
END;
