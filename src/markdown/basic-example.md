``` java
public List<Customer> fetchCustomers(customerId) {
    try (Connection con = sql2o.open()) {
    final String query =
        "SELECT id, name, address " +
        "FROM customers WHERE id = :customerId";

    return con.createQuery(query)
        .addParameter("customerId", customerId)
        .executeAndFetch(Customer.class);
    }
}
```