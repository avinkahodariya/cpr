import { FlexColumn } from 'components'
import { PageHeader } from 'elements'
import { GetCourcesList } from 'hooks'
import { CourcesFilterBar, CourseList } from 'page-components'
import React from 'react'
import styled from 'styled-components'

const CourcesContainer = styled(FlexColumn)`
  overflow-y: auto;
  margin-top: 100px;
`
export const CourcesScreen = () => {
  const { data, updateFilter, loading, resetFilter, filter } =
    GetCourcesList('')
  return (
    <div>
      <PageHeader
        title="Cources"
        subTitle="Explore Our CPR & First Aid Courses"
      />
      <div>
        <CourcesContainer className="p-5">
          <CourcesFilterBar
            filterChanged={updateFilter}
            filter={filter}
            resetFilter={resetFilter}
          />
          <CourseList list={data} loading={loading} />
        </CourcesContainer>
      </div>
    </div>
  )
}
