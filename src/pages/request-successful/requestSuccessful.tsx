import { BackButton, Balance, Footer, PageHeader, Summary } from "@/components";
import * as Styled from './requestSuccessful.styled';
import { EditButton } from "@/components/summary/summarybuttons/editButtons";
import { DeleteButton } from "@/components/summary/summarybuttons/deleteButtons";

export function RequestSuccessful() {
  return (
    <>
      <div>
        <BackButton onClick={function (): void {}} />
        <Styled.ContainerTitle>
          <PageHeader title={"All done!"} subtitle={"Your Time Off was requested, cheers!"}></PageHeader>
        </Styled.ContainerTitle>
        <Summary variant={"manager"} display={false}></Summary>
        <Balance isAdmin={false} availableDays={0} consumedDays={0} optionalHolidays={0}></Balance>
        <Footer variant={"allDone"}></Footer>
      </div>
    </>
  )
}