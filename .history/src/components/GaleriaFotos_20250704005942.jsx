import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Categorias from "./Categorias";

async function fetchData() {
  try {
    const { data } = await axios.get(
      `https://api.pexels.com/v1/search?query=mountain&per_page=12`,
      {
        headers: {
          Authorization:
            "WM5W7xLg1COodo3lwvRPmlVaCVpBeosisd5oLmAZSYXkme93CP5uTwv6",
        },
      }
    );
    console.log(data);
    setFotos(data.photos || []);
  } catch (error) {
    console.error(error);
  }
  useEffect(() => {
    fetchData();
  }, []);
}
