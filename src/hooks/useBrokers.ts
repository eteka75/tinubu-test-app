import { useState } from "react";
import { brokersData } from "../utils/constants";

export interface Broker {
  id: number;
  legalName: string;
  address: string;
  city: string;
  country: string;
  contact?: string;
  commission?: number;
}

export const useBrokers = () => {
  const [brokers, setBrokers] = useState<Broker[]>(brokersData);

  const [selectedBroker, setSelectedBroker] = useState<Broker | null>(null);

  const addBroker = (newBroker: Omit<Broker, "id">) => {
    const newId = brokers.length + 1;
    const brokerToAdd = { id: newId, ...newBroker };
    setBrokers((prevBrokers) => [...prevBrokers, brokerToAdd]);
    setSelectedBroker(brokerToAdd);
  };

  const handleSelectBroker = (brokerId: number) => {
    const broker = brokers.find((broker) => broker.id === brokerId);
    setSelectedBroker(broker || null);
  };

  return { brokers, selectedBroker, addBroker, handleSelectBroker };
};
