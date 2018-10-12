INSERT INTO client (client_username, client_password)
VALUES 
($1,$2)
RETURNING *;