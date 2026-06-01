import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const MAPTILER_KEY = import.meta.env.VITE_MAPTILER_KEY;

/**
 * MapTiler のスタイルを読み込んだベースマップを表示するコンポーネント。
 * 各カスタマイズ手法は map の load 後にこの style を編集して検証する。
 */
function MapView() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) {
      return;
    }

    if (!MAPTILER_KEY) {
      console.warn(
        "VITE_MAPTILER_KEY が設定されていません。.env.example を参考に .env を作成してください。"
      );
    }

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${MAPTILER_KEY}`,
      center: [139.7671, 35.6812], // 東京駅
      zoom: 12,
    });

    map.addControl(new maplibregl.NavigationControl(), "top-right");

    map.on("load", () => {
      // 検証テーマごとの実装はここに追加していく。
      //
      // 1. カスタムアイコン・マーカーの表示
      // 2. ブランドカラーに合わせた地図スタイル変更
      // 3. POI・ラベル・レイヤーの表示制御
      // 4. 言語・境界・単位系のカスタマイズ
      // 5. ポリゴンのパターン塗り
    });

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return <div ref={containerRef} className="map" />;
}

export default MapView;
