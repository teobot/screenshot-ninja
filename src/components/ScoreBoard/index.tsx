// next imports
import Image from "next/image";

// style imports
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["greek"] });
import styles from "@/components/ScoreBoard/scoreboard.module.css";

// component imports
import Container from "@/components/Container";

// image imports
import shark_logo from "./images/logos/shark_logo.jpg";

// data imports
const IMAGES = [require("./images/backgrounds/emlc.jpg")];

type ScoreBoardProps = {
  awayTeamUrl: string;
  awayTeamName: string;
  homeTeamScore: number;
  awayTeamScore: number;
  didWin: boolean;
};

export default function Index({
  awayTeamUrl = "https://www.newportbeachwaterpolo.com/c/A63FC8C/image/ClubPhotos/Newport-WP-logo.jpg",
  awayTeamName = "Lancaster",
  homeTeamScore = 7,
  awayTeamScore = 9,
  didWin = false,
}) {
  const image = IMAGES[Math.floor(Math.random() * IMAGES.length)].default;

  const winColor = "#28a745";
  const loseColor = "#dc3545";

  return (
    <Container>
      <div
        className={inter.className}
        style={{
          position: "relative",
          width: 1024,
          height: 1024,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            filter: "blur(3px)",
          }}
          width={1024}
          height={1024}
          src={image.src}
          alt="background"
        />
        <div className={styles.overlay}></div>

        <div className={styles.topContainer}>
          <div className={styles.middleContainer}>
            <div className={styles.textContainer}>
              <h1
                style={{
                  color: didWin ? winColor : loseColor,
                }}
                className={styles.topText}
              >
                FINAL MATCH RESULT
              </h1>
              <p className={styles.bottomText}>Sharks Vs {awayTeamName}</p>
            </div>

            <div className={styles.scoreContainer}>
              <div className={styles.homeLogo}>
                <Image
                  width={210}
                  height={210}
                  src={shark_logo}
                  alt="sharks logo"
                />
              </div>
              <div
                className={styles.score}
                style={{
                  backgroundColor: didWin ? winColor : loseColor,
                }}
              >
                <div className={`${styles.scoreText} ${inter.className}`}>
                  {homeTeamScore}-{awayTeamScore}
                </div>
              </div>
              <div className={styles.awayLogo}>
                <Image
                  width={210}
                  height={210}
                  src={awayTeamUrl}
                  alt="away team logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
