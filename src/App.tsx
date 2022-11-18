import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Navigation from "./components/Navigation";
import Catalog from "./components/Catalog";

const App: Component = () => {
  return (
    <div>
      <Navigation/>
        <div class={'flex text-center '}>
        <ul class={'mx-auto'}>
            <li>Catalog</li>
            <li>User Account + management</li>
            <li>Cart</li>
            <li>Checkout</li>
            <li>Product API</li>
            <li>Admin: Catalog Management [categories/products/export/import]</li>
            <li>Admin: Order Management [orders/invoices/payments/export]</li>
            <li>Admin: Customer Management [customers/export/import]</li>
            <li>Queue - Kafka</li>
            <li>Observability - Prometheus</li>
            <li>Graphing - Grafana</li>
            <li>Testing - FE - Playwrite</li>
            <li>Testing - BE - ???</li>
            <li>DB ?  Mongo? [something in docker/podman]?</li>

        </ul>
        </div>
        <Catalog/>
    </div>
  );
};

export default App;
