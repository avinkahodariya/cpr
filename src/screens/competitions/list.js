import { LoaderBar, PrimaryButton, ScreenHeader } from 'components'
import { GetCompetitionsList } from 'hooks'
import { CompetitionList } from 'page-components'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const CompetitionsScreen = () => {
  const { data, filter, pageChanged, total, loading } = GetCompetitionsList()
  const navigate = useNavigate()
  return (
    <div>
      <ScreenHeader text="Manage Competitions" />
      {loading && <LoaderBar />}
      <div className="px-5 my-4 mt-3">
        <PrimaryButton className="mb-3" onClick={() => navigate('add-edit')}>
          Add
        </PrimaryButton>
        <CompetitionList
          list={data}
          pageChanged={pageChanged}
          page={filter.page}
          loading={loading}
          total={total}
        />
      </div>
    </div>
  )
}
