import React, { useMemo } from 'react'
import { Card, Avatar, Button, Progress, Typography } from 'antd'
import styled from 'styled-components'
import { DateFormat, DateUtility } from 'utility'
import { CommonPagination, FlexRow } from 'components'
import { useNavigate } from 'react-router-dom'

const { Text } = Typography

const StyledCard = styled(Card)`
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.background};
    border-radius: 12px;
    .ant-card-body {
        padding: 16px;
    }
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const CompetitionInfo = styled.div`
    display: flex;
    align-items: center;
`

const CompetitionDetails = styled.div`
    margin-left: 12px;
`

const RoundProgress = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
`

const Round = styled.div`
    text-align: center;
    color: ${props => (props.active ? '#0056d2' : '#b0c4de')};
    font-weight: ${props => (props.active ? 'bold' : 'normal')};
`

const RankBox = styled.div`
    background-color: white;
    border-radius: 8px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const ProgressContainer = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 20px;
`

const Dot = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => (props.active ? '#0056d2' : '#b0c4de')};
`

const CompetitionProgress = ({
    totalRounds,
    currentRoundIndex,
    progressPercent,
}) => {
    return (
        <ProgressContainer>
            <Progress
                percent={progressPercent}
                strokeColor="#0056d2"
                trailColor="#b0c4de"
                showInfo={false}
                strokeWidth={8}
            />
            {Array.from({ length: totalRounds }).map((_, index) => (
                <Dot
                    key={index}
                    active={index <= currentRoundIndex}
                    style={{ left: `${(index / (totalRounds - 1)) * 100}%` }}
                />
            ))}
        </ProgressContainer>
    )
}

const StatusBox = ({ competition, lastRound, currentRound }) => {
    const status = useMemo(() => {
        if (
            DateUtility.isPast(lastRound?.result_announcement) ||
            DateUtility.isPast(competition?.end_date)
        ) {
            return 'completed'
        }
        if (
            (!DateUtility.isPast(lastRound?.result_announcement) ||
                !DateUtility.isPast(competition?.end_date)) &&
            (DateUtility.isPast(currentRound?.start_date) ||
                DateUtility.isPast(competition?.start_date))
        ) {
            return 'live'
        }
        if (!DateUtility.isPast(lastRound?.start_date)) {
            return 'upcoming'
        }

        return 'live'
    }, [competition, lastRound])
    return (
        <>
            {status === 'completed' && (
                <Button type="default" disabled>
                    Completed
                </Button>
            )}
            {status === 'live' && (
                <Button active type="default">
                    Live
                </Button>
            )}
            {status === 'upcoming' && (
                <Button active type="default">
                    Upcoming
                </Button>
            )}
        </>
    )
}

const CompetitionCard = ({ competition }) => {
    const currentRoundIndex = competition.rounds.findIndex(
        round => !DateUtility.isPast(round.result_announcement),
    )
    const currentRound =
        competition.rounds[currentRoundIndex] ||
        competition.rounds[competition.rounds.length - 1]
    const totalRounds = competition.rounds.length
    const progressPercent =
        currentRoundIndex >= 0
            ? (currentRoundIndex / (totalRounds - 1)) * 100
            : 100

    const lastRound = competition.rounds[competition.rounds.length - 1]
    const getCurrentPhase = round => {
        if (DateUtility.isPast(competition.end_date)) {
            return `Completed on ${DateUtility.dateToLocalISO(
                new Date(competition.end_date),
                DateFormat.DDMMYYYY,
            )}`
        }
        if (DateUtility.isPast(lastRound.result_announcement)) {
            return `result announcement on ${DateUtility.dateToLocalISO(
                new Date(lastRound.result_announcement),
                DateFormat.DDMMYYYY,
            )}`
        }
        if (!DateUtility.isPast(competition.start_date)) {
            return `submission start in ${DateUtility.getDaysRemaining(
                competition.start_date,
            )}`
        }
        if (!DateUtility.isPast(round.submission_deadline)) {
            return `submission ends in ${DateUtility.getDaysRemaining(
                round.submission_deadline,
            )}`
        }
        if (!DateUtility.isPast(round.submission_deadline)) {
            return `submission ends in ${DateUtility.getDaysRemaining(
                round.submission_deadline,
            )}`
        }
        if (!DateUtility.isPast(round.voting_deadline)) {
            return `Voting ends in ${DateUtility.getDaysRemaining(
                round.voting_deadline,
            )}`
        }
        if (!DateUtility.isPast(round.result_announcement)) {
            return `result announced in ${DateUtility.getDaysRemaining(
                round.result_announcement,
            )}`
        }
        return 'Round completed'
    }
    const navigate = useNavigate()
    return (
        <StyledCard>
            <Header>
                <CompetitionInfo>
                    <Avatar size={48} src={competition.image} />
                    <CompetitionDetails>
                        <Text strong>{competition.name}</Text>
                        <br />
                        {currentRound ? (
                            <Text type="secondary">
                                {currentRound.name}&nbsp;
                                {getCurrentPhase(currentRound)}
                            </Text>
                        ) : (
                            <Text type="secondary">Competition Ended</Text>
                        )}
                    </CompetitionDetails>
                </CompetitionInfo>
                <div onClick={() => navigate(`add-edit/${competition._id}`)}>
                    edit
                </div>
                <StatusBox
                    competition={competition}
                    currentRound={currentRound}
                    lastRound={lastRound}
                />
            </Header>

            <RoundProgress>
                {competition.rounds.map((round, index) => (
                    <Round key={round._id} active={index <= currentRoundIndex}>
                        {round.name}
                    </Round>
                ))}
            </RoundProgress>

            <CompetitionProgress
                totalRounds={totalRounds}
                currentRoundIndex={currentRoundIndex}
                progressPercent={progressPercent}
            />

            <RankBox>
                <Text strong>Rank #1</Text>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar size={32} src="https://via.placeholder.com/32" />
                    <Text strong style={{ marginLeft: 8 }}>
                        Trapster X
                    </Text>
                </div>
            </RankBox>
        </StyledCard>
    )
}

export const CompetitionList = ({ list, page, pageChanged, total }) => {
    return (
        <div className="col-12 ">
            {list.map(item => (
                <div className="mb-4" key={item._id}>
                    <CompetitionCard competition={item} />
                </div>
            ))}
            <FlexRow className="justify-content-end">
                <CommonPagination
                    page={page}
                    pageChanged={pageChanged}
                    total={total}
                />
            </FlexRow>
        </div>
    )
}
