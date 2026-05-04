"use client";

import { useMemo, useState } from "react";
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import countriesAtlas from "world-atlas/countries-110m.json";
import styles from "./index.module.css";

const visitedCountries = [
  "Bangladesh",
  "India",
  "Italy",
  "France",
  "Germany",
  "Sweden",
  "Albania",
  "Austria",
];

const visitedCountrySet = new Set(
  visitedCountries.map((country) => country.toLowerCase()),
);

const countryAliases = {
  "united states of america": "united states",
  "russian federation": "russia",
  "united republic of tanzania": "tanzania",
  "united arab emirates": "united arab emirates",
};

const isVisitedCountry = (countryName) => {
  const normalized = countryName.toLowerCase();
  return (
    visitedCountrySet.has(normalized) ||
    (countryAliases[normalized] &&
      visitedCountrySet.has(countryAliases[normalized]))
  );
};

const CountriesVisited = () => {
  const [hoveredCountry, setHoveredCountry] = useState("");

  const countries = useMemo(() => {
    const mapWidth = 1000;
    const mapHeight = 500;
    const countriesGeoJson = feature(
      countriesAtlas,
      countriesAtlas.objects.countries,
    );

    // Focus the map toward Europe/Asia to reduce unused Atlantic space.
    const projection = geoMercator()
      .center([10, 40])
      .scale(110)
      .translate([mapWidth / 2, mapHeight / 2 + 10]);

    const pathGenerator = geoPath(projection);

    return countriesGeoJson.features.map((country) => {
      const countryName = country.properties?.name || "Unknown";

      return {
        id: country.id,
        name: countryName,
        path: pathGenerator(country) || "",
        visited: isVisitedCountry(countryName),
      };
    });
  }, []);

  const totalCountries = countries.length;
  const visitedCount = countries.filter((country) => country.visited).length;
  const visitedPercentage =
    totalCountries > 0
      ? ((visitedCount / totalCountries) * 100).toFixed(1)
      : "0.0";

  return (
    <section id="countries-visited" className={styles["countries-section"]}>
      <div className={styles["countries-container"]}>
        <h2>Countries Visited</h2>
        <p className={styles.subtitle}>
          Hover on a country to see its name. Countries I have visited are
          highlighted.
        </p>

        <div className={styles["map-wrapper"]}>
          <svg
            viewBox="0 0 1000 500"
            className={styles["world-map"]}
            role="img"
            aria-label="World map with visited countries highlighted"
          >
            <rect
              x="0"
              y="0"
              width="1000"
              height="500"
              className={styles["ocean"]}
            />
            {countries.map((country) => (
              <path
                key={country.id}
                d={country.path}
                className={`${styles.country} ${country.visited ? styles.visited : styles.notVisited} ${
                  hoveredCountry === country.name ? styles.hovered : ""
                }`}
                onMouseEnter={() => setHoveredCountry(country.name)}
                onMouseLeave={() => setHoveredCountry("")}
              >
                <title>{country.name}</title>
              </path>
            ))}
          </svg>
        </div>

        <p className={styles["hover-label"]}>
          {hoveredCountry
            ? `Country: ${hoveredCountry}`
            : "Hover a country on the map"}
        </p>

        <div className={styles["stats-row"]}>
          <div className={styles["stat-item"]}>
            <span className={styles["stat-label"]}>Visited Countries</span>
            <span className={styles["stat-value"]}>{visitedCount}</span>
          </div>
          <div className={styles["stat-item"]}>
            <span className={styles["stat-label"]}>Total Countries</span>
            <span className={styles["stat-value"]}>{totalCountries}</span>
          </div>
          <div className={styles["stat-item"]}>
            <span className={styles["stat-label"]}>Visited Percentage</span>
            <span className={styles["stat-value"]}>{visitedPercentage}%</span>
          </div>
        </div>

        <div className={styles.legend}>
          <span className={styles["legend-item"]}>
            <span
              className={`${styles["legend-dot"]} ${styles["legend-visited"]}`}
            />
            Visited
          </span>
          <span className={styles["legend-item"]}>
            <span
              className={`${styles["legend-dot"]} ${styles["legend-unvisited"]}`}
            />
            Not visited
          </span>
        </div>
      </div>
    </section>
  );
};

export default CountriesVisited;
