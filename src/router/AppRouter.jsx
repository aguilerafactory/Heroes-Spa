import { Route, Routes } from "react-router-dom"
import { HeroesRoutes } from "../heroes"
import { LoginPage } from "../auth"
import { UserProvider } from "../auth/context"

export const AppRouter = () => {
  return (
    <>
      <UserProvider>
          <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/*" element={<HeroesRoutes />} />
          </Routes>
      </UserProvider>
    </>
  )
}
