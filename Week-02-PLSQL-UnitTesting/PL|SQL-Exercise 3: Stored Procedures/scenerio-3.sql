BEGIN
   FOR i IN (
      SELECT l.LoanID, c.Name, l.EndDate
      FROM Loans l JOIN Customers c ON l.CustomerID = c.CustomerID
      WHERE l.EndDate BETWEEN SYSDATE AND SYSDATE + 30
   ) LOOP
      DBMS_OUTPUT.PUT_LINE('Reminder: ' || i.Name ||', your loan (ID: ' || i.LoanID || ') is due on ' || TO_CHAR(i.EndDate, 'DD-MON-YYYY'));
   END LOOP;
END;
