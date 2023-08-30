import React from "react";

import Container from "@/components/Container";
import Index from "@/components/ScoreBoard";

// http://localhost:3000/manchester-sharks/score-board?awayTeamUrl=https://www.newportbeachwaterpolo.com/c/A63FC8C/image/ClubPhotos/Newport-WP-logo.jpg&awayTeamName=Lancaster&homeTeamScore=7&awayTeamScore=9&didWin=false

export default function ScoreBoard({
  awayTeamUrl,
  awayTeamName,
  homeTeamScore,
  awayTeamScore,
  didWin,
}: any) {
  return (
    <Container>
      <Index
        awayTeamUrl={awayTeamUrl}
        awayTeamName={awayTeamName}
        homeTeamScore={homeTeamScore}
        awayTeamScore={awayTeamScore}
        didWin={didWin == "true"}
      />
    </Container>
  );
}

// get url params
export async function getServerSideProps({ query }: any) {
  const awayTeamUrl: string = query.awayTeamUrl;
  const awayTeamName: string = query.awayTeamName;
  const homeTeamScore: string = query.homeTeamScore;
  const awayTeamScore: string = query.awayTeamScore;
  const didWin: boolean = query.didWin as boolean;

  return {
    props: {
      awayTeamUrl,
      awayTeamName,
      homeTeamScore,
      awayTeamScore,
      didWin,
    },
  };
}
