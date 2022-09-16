``` java
public void insertCustomer(Customer customer) {
    final String insertQuery =
        "INSERT INTO customers (id, name, address) " +
        "VALUES (:id, :name, :address)";

    try (Connection con = sql2o.beginTransaction()) {
        con.createQuery(insertQuery)
            .addParameter("id", customer.getId())
            .addParameter("name", customer.getName())
            .addParameter("address", customer.getAddress())
            .executeUpdate();
        // Remember to call commit() when a transaction is opened,
        // default is to roll back.
        con.commit();
    }
}
```