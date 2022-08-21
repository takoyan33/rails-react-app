import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const IndexPage: React.FC = () => {
  return (
    <>
      <Header />
      <h1 className="">API図鑑</h1>
      <p className="">API図鑑では、APIを用いたアプケーションを紹介します。</p>
      <button>
        <Link to="todos">RailsAPI</Link>
      </button>
      <br></br>
      <br></br>
      <button>
        <Link to="Qiita">QiitaAPI</Link>
      </button>
      <br></br>
      <br></br>
      <button>
        <Link to="Qiita">Qiita練習API</Link>
      </button>
    </>
  );
};

export default IndexPage;
