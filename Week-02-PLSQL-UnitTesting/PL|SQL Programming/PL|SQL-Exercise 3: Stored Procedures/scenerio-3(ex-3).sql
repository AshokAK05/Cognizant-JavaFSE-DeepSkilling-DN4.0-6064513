CREATE OR REPLACE PROCEDURE TransferFunds (
    p_from_acc IN NUMBER,
    p_to_acc IN NUMBER,
    p_amt IN NUMBER
) IS
    v_balance NUMBER;
BEGIN
    SELECT Balance INTO v_balance
    FROM Accounts
    WHERE AccountID = p_from_acc
    FOR UPDATE;
    IF v_balance < p_amt THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance for transfer.');
    END IF;
    UPDATE Accounts
    SET Balance = Balance - p_amt,
        LastModified = SYSDATE
    WHERE AccountID = p_from_acc;
    UPDATE Accounts
    SET Balance = Balance + p_amt,
        LastModified = SYSDATE
    WHERE AccountID = p_to_acc;
    COMMIT;
END;
/
