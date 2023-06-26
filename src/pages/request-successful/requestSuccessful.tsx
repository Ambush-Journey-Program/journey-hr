import { BackButton, Balance, Footer, Summary } from "@/components";
import * as Styled from './requestSuccessful.styled';
import { Icon, Subtitle, Title } from "@/design-system";
import { useRouter } from "next/router";

export function RequestSuccessful() {
  const router = useRouter();
  const handleNavigate = () => {
    router.push('/');
  }
  return (
    <>
      <div>
        <BackButton onClick={function (): void {}} />
        <Styled.IconContainer>
          <Icon color="accepted" icon='CheckCircleIcon' size="58px"/>
        </Styled.IconContainer>
        <Styled.ContainerTitle>
        <Title variant="h4">{"All done!"}</Title>
          <Subtitle fontWeight="regular" variant="s6">
            {"Your Time Off was requested, cheers!"}
          </Subtitle>
        </Styled.ContainerTitle>
        <Summary variant={"manager"} display={false}></Summary>
        <Balance isAdmin={false} availableDays={0} consumedDays={0} optionalHolidays={0}></Balance>
        <Footer variant={"allDone"} onApply={handleNavigate}></Footer>
      </div>
    </>
  )
}