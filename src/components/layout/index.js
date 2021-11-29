import React, { useContext, useMemo } from "react"
import { Card, Flex, Spinner, Text, Link } from "@theme-ui/components"
import OrderContext from "../../context/order-context"
import ProductSelection from "../product-selection"
import OrderCompleter from "../order-completer"
import Logo from "./logo"

const Layout = ({ product, regions, country, regionId }) => {
  const { cart } = useContext(OrderContext)

  const selectedRegion = useMemo(() => {
    return regions.find((r) => r.id === regionId)
  }, [regions, regionId])

  return (
    <Flex
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        p: "2em",
      }}
    >
      <Logo />
      <Card
        variant="container"
        sx={{
          bg: "white",
          my: "2em",
          width: cart.items < 1 ? "800px" : "500px",
          height: cart.items < 1 ? "400px" : "auto",
          p: "1.5em",
          borderRadius: "8px",
          justifyContent: "center",
          transition: "all .2s linear",
        }}
      >
        {product ? (
          <>
            {cart.items < 1 ? (
              <ProductSelection
                product={product}
                regions={regions}
                region={selectedRegion}
                country={country}
              />
            ) : (
              <OrderCompleter country={country} region={selectedRegion} />
            )}
          </>
        ) : (
          <Spinner />
        )}
      </Card>
      <Text
        sx={{
          fontWeight: "500",
          color: "medusa100",
        }}
      >
        Learn more about{" "}
        <Link
          sx={{
            textDecoration: "none",
            color: "medusa100",
          }}
          href="https://www.medusa-commerce.com/"
        >
          Medusa
        </Link>
      </Text>
    </Flex>
  )
}

export default Layout
