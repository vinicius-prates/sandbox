export interface Account {
    id:      number;
    agency:  string;
    account: string;
    balance: string;
    client:  ClientProps;
}

export interface ClientProps {
    id?:           number;
    user_name:    string;
    email:        string;
    sexo:         string;
    birth_date:   string;
    phone_number: string;
    created_at?:   Date;
    good_client:  boolean;
    user:         string;
}
