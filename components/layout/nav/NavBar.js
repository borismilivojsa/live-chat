import React from 'react'
import Dropdown from '@/components/layout/nav/Dropdown'
import Link from 'next/link'

const NavBar = ({user}) => {
    return (
        <div className="border-end bg-light h-100">
            <div className="h-100 d-flex flex-column justify-content-between">
                <div className="mx-2 my-2 d-flex align-items-center">
                    <img
                        className="w-2 h-2 rounded-circle profile-image object-fit-cover me-2"
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcUFBUYGBcXGRoXFxkYGhkaFxkaGRkZGBkXFxcaIiwjGh0pHhcZJDYkKS0vMzMzGiI4PjgyPSwyMzIBCwsLDw4PHhISHjIpIikyMjIyNzIyMjI6NTIyMjIyMjQvOjIyMjIyOjoyMjIyMjIzMjIyMjIyMjIyMjIyMjIyMv/AABEIAJ0BQQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAQIDBAYABwj/xABGEAACAQIDBQQGBgkCBAcAAAABAgMAEQQSIQUxQVFhBhNxkSIyQoGh8BRSYnKxwQcVIzNTgpLR4aKyQ2Nz8RY0VJPC0uL/xAAaAQACAwEBAAAAAAAAAAAAAAADBAECBQAG/8QALREAAgIBBAEDBAEDBQAAAAAAAAECAxEEEiExQRNRYQUiMoFxI2KRFDNCocH/2gAMAwEAAhEDEQA/APNKWkYWNOqCyJYMQyXynfVg7Sk+sPIVTNI1UcIt5aL7ml2STTs5uxuaYN48aQUq7x41bGFwV7O4mlFKiE7gTTmQjeCK7KLqEsZxwId1Np5ptqhEtCrT6Yu+pLa1DLJcDX3U0VJINKjG+uRzXIrVxFOcUlq45oWKQqRxvw436DnWy2L2avaTEi53rF7K9ZPrN03DrUPZDYwsuJkAudIVP++x4nh01rQ7T2h3ZVI172VmW0SBmkZLgMVVbkWGtzpTVVMUt0jJ1ernKXo1Ajths+eVIxCpZATnRSByym2lwLEe+hez+xTsAZpMl/ZQBmHi24HwvW5i2dtGQXXCIg4d9Mqt71RWt50k2Bx8Yu+DzjiYJUkPjkcIT7qJKVUpZbARjqY14isf4yZ3CdjoI3Vy8j5SCAxXKSNReyg7+F60dqr4PHxyFlUkOvrxupSRPvRtYirVqPCMUvtErZWSeJ9oZautT7V1qvkEMtSWqS1JapIwZPHbSwErlXJVwbCRVZSCOTrv9+lW4sRLGocMMVD9dLd6o+0o0k91j0odj+xNyzQyWuSQjjQdA44e6s9HJiMFLbVG4qdUcfgw6jUUhbCMuJxx8o2dPNwX9KX6Z6VgMWkqZ42DKdP7gg7j0NBdq7KKXkjHob2X6vVenSuwid+gxeG/ZSm4dT+7kK6FZAN+7R99F9nbRSVTcd3IhyyRsRmU/mp4Eb6zr9PKt5XKNjS62NvHUl2jJA6dKu4HFNEQQf8AIq9tbZG+SIXHtIPxX+1DY4ZNxRv6TS+TTTUka3C4sSC4PiOVJjMKsilXHgeIPMVncK0iG4U+R+NaHD4kMtzoeINcClHa8oyONwjRNlYXv6rcG8OR6UV2Pti1o5D91j+BopijFIpR2Ug9RcHmORrLYrC92xW4ccGB/G240RezJypcMJ9qMU6mLI7KCGvlJF91t1V+zuKd5GDuzDLfU34iqGLw87hAUdlUHKcp49fdV3s7hnSQllYDLbUEDeKlYxgq1g0Zpb1xYcxS5l5jzFVKiZq6lzLzHmK6uwdk8hk9Y+NLTWp1PmadXGurjXEiCpsNFmYdNTUQorsyD0S195/Ch2S2xyNaGj1rUscdv9EMuKC+igGlOwuIzsEYDWqmJHpt4mrOykBk8ASKHJJQyN6fUWWahQzw3jHjBbk2Vc+iT4Wv5WqjiMG6HUXG6458ulaOCXIwYcKkxzozBl8Tpx4e+gxukuzb1H0qmf4rD911+0Al2aVsXOp4Dh4mpUwi8viaZtXEvntuFtLfGqJlY+0eVHWZLOTzlsfSm4Nco1+xNlRtmLorAaC4vwveibbOiG6OMfyislgJGCXDEX5eVdJM9/WbzNCcXnsspcdGmlwqWNlT+kUMmwokkSAWAa7ykWGWJPW14XJC+80DmkNvWbzNajsRhPQlmbXvG7sX+omh82J8qY09W6SyJ67UOuptdvgK4rBnFNHhIAuZwsneD1YI0ItKCONxZRxN+ANeg7C2BDhEIiW7trJI+skjc3f8hoOAoD+jbAJHhZMSFVBiJHkHALEhKxgclsC/85rL7Z7b4vH4j6Hsq6qbjvRo7getJmP7qMc/WNxxNqPZJyl8IRoqVcV7s9erq8hn/RXjHXO2ODyb7N3pF+XeFiffl91ZaHb20tmTmJ5HDIRmilYyRsDuK3PqkbipH4ih4TD8ntfaLs7Fi1Bb0JUv3cyaSIfH2l5qdDWLwksgaSGYBZoiFkA9VgdUkT7DDUctRwrWdje1Ue0Ic6jJKlhLGTcoTuIPtKbGx6EbxQ3tzhsk2FxS72c4WTqsgLxk/ddLD/qGjUzcZY8MV1VKnBvygfautTrVXweDkxkrQxOY4oyBiJltmzEX7mK+57EFm9kEcTTk5qCyzIqplZLaivLj1D91Gryy/wAOJc7jq/BB1YiribM2gwuMGijlJOgb3hFYDzrcbJ2VDhkEUCBFGptqWPFnY6sx5kk0QpSWpm+uDUhoa4rnk8xxEOMjF5cFJlG9omSa3XKpD+QNUZYsNjEsbSBTzKujcQRoynmDXrdZrtL2WXEftYiIcUo9GUD1vsSr7aHrqOFTHUPqSyiJ6KPdbwzK4XCpGgjjXKi7gPMm53knjQzb2yTIO8j0lQacA68Y2/LkatbFusbJJnEsbsswka7CTexvuym4K20sRRAimnGM4Y8GbunTblPlMo7BlV4I2B4WIO8MDZlPUG9TPx1FZrb+FMUwkS4SY2a3CUDf/MPiKEO7a2JrGsqcJtM9bptSra1JGynP2hVV3XKfSG48qx0zEnUmoGNVVfyGduPAZZx9blTVK8WHmKBX/KkFE2AvU+D1OGRci2YeqOI5VXkI+sKxjE2t0+QarMx69KHsC78GzddfWFUMcvoHWso7m+80wyNzPmasq/kq7fgOZG+Sa6gfeN9Y+ZrqttK+oUCN1Ppp4U6jCaOpDSmkNcWZwrQbBjzqq83t5mgArQbDfKqMOD38jS+p/E1PpP8AuyfwwLiR+0f7zfiafhJMrqfPwNWu0EGTEygbi2ceDgN+dUFGoqyw4/oShJ1zUl2maQsLX4VFjplVEKSK7tqVXXIOFz9bpQtsQcgUnQfNqVI/RzdbeVLqrHZ6O36nGcU4vBHiJS2hN6jVKkdda61MRWFhGDbN2WOTDGCwrNGCLeP5Vz4J9Qbb6u7KYLECxsACSeAqzgNmyYn02LRQndbSWUcwfYX4npVIQnOWEUuurphmTM1ikyWBYZtfR3t/SNa9A2JhTHhI0tZu6BI+0wzN/qY1awOzYoRaONV5kD0j1ZjqT41bFalNOzls87rNb6+ElhIGbd2gYuzmGEZsZY4YSRyK5pB7wjKfE0K/QpPGuKnRiBJJEnd33kIzGQDzQ2+z0qba0DPgMTgRrJhn+mQDi8BYmQLzKF3Fhwyc680gmZGWSNirqQyspIZSNxUjdSrWODRjJSSa8n1dXin6a542xcCKQZEibvLbwGYGMHyc2+11rdfoy25Ji8Hnml7yVHZH0UMBoUuFA3jW9tdeVCf0y4SE4RJWCiYSKsZ0zspvnTmVyjN0IFVXZc84/R/tVsNj4GBssriGQcCshCi/gxVvd1r2H9IbAwQLxfFwZf5GMjf6UNeLdjcA0+OwyKCf2qSNbgsZzsTy0S3iRXq238YMTjQiG8eDDBjwbEOACAeORLg9ZCOFEhHMkgVslGDb9intTFd1DJIBcohKjm25R7yQKm2j2hTZGGhwcS99jHUMV4d5Ibs8ltSWcmyjU9BrVPbrBY0Ler3+Gz/d7+O9/dWF2HtoPtWLGYg+i85dy25AwZY78lS6eAWi3vMkhXQxSg5fJ6GOym1sUveYraTQM2oihDBU+yTG6X/1eJrJbe/W2ypFLYyR0Y+hIXaRGIFyjJLmytbhy3Hfb3YVgv0w4hF2cUa2d5IxGON1bMxH8gYe/rS+WaGEM7C/pBXGMMPiAseIt6JW+SWwucoPqtxy3Nxu4gegV8oRSsjK6MVZSGVhvVgbgjqCK+mezG0/pWDgxBFmkRSwG4ONHA6Zga6S8lUZDt9seP6Xh53W6TXgkW5ys6qXhZ1Bs1gsi69OVNtRX9JUSvh4Eb28VELAkHc5axGo9ENuoRBCqKEQWVRYDXQeJpvSv7H/ACZf1Bfcn8A/b+E73DyIPWAzp95PSX4i3vrIwYXOiuD6wB8xevQCKxuzYrI6W/dyyJ7g5t8CKBrljEkOfRp5bg/5Bk2CO+9V3wZ11o9iIzbcaqPEeRrPU2bzggAVpctTMhvu+b0x1PKj5F3EOjZ5ZQQ28aac+dVH2e3MGjuGQ92ot7I/Cq8idONB3PIxtTRnpcKwO8a1XkhIF6N4ga7qo4lPRq8ZMFKCKFjXVLp8mlq+Sm0GtwpaRuFLRRbycaQ0tdXHHUbwUmSENyufjQStBs3DCSNUZsqnVmPBQSzHyBpe98LPuav0vux/2sr9oTeSJjvaCInxykflVZMGSneA6DhSbVxgllaQCy6Kg5IoCqPIVZ2TLqYzubdV4LCSZnTb5aKJolh4rxp1ufjVPFxZGIo5hYv2aaeyPjrVbHhB68S5A80YDEUoj1q3iISXb5FKYhv5a+VV3cFtoX2ThBO6RkfsolVpR9dzqkZ+yB6RH3a2YFBeyOHyYWNj60t5W/nPo/6Qoo3Wrp61GCPL62922v2XCOpbV1LRxIp47CF8kiP3csRzRSAXym1irL7SMNCvEV532i2PZyyoIXY3aEn9mWO84WQ+iyHf3bEOu4Ajd6hTJYwylWUMDvUgEHoQaDZWpc+RujUyr47R45g8ZiMLJnjeSF7WJW6kjkQdGHQ1LPicTjJM0jtK4HrSOAqLxJZiFRfKvTOxvZTBYiITyWkkYnPArGOKFgbGMxIQSRbUte+8VZ7T9hsMoOJi7mBYoznWSIPCQpLZ7Agh9bX1vppSUm10bEWm1ngznZVFgR0wsitNIMkuM3Rxrxiwgaxka++QgLex1sBWowOESONY4x6I63JJ1LMeLE3JPG9BcB2JxE0aSNBg486hsro5dQdQGUDQ24X0o5sP9HkESP8ASLO7tmBjMkSxi1sqEPm63Jq1NzXccfsFq9Mp42zyvbBW21gu+gli4upC/eGq/ECvG2UgkEWIuCDwI0INe0bS2dg8P6u05ITwR5EnueQjcGRvAGvPNubJkllmkjUvkyM5EckTOHBIkEMnpDQa894FEnNT67BUVypypNYNZ+iDtBK0zYWWdmjEV4Uex9JWFwrEZtFvZb2tfTSvSe02HhfCTLiQvdBGZifZsCQwPAg7jzr5lSQqQykqQbggkEEbiCNQetX9o7dxMyBJ8RLIgsQruStxuJB0J6mgtZG0wcpNhffbWvoz9HuFMWzcKrAgmPPY7x3jGQAjhowry/sL2AlxUiTYmMx4ZTms4s8tvZVTqEPFjvGg33HpvaHtQsJOHwwWXE2sEHqRDcHmYeqo+rvNtOdS+eEQ2ly+gX2txImxkUK6rhVMsnSSVckS+IQu38y86rmq+AwndKczF3di8kjetJI3rMeXIDgABVk09VDZHBh6m31J5XXgQ1m9npdsRy7+T/43rSGs5sTEp3buzKDJLK+p4GRgPgBS2uf2I0Po6/qt/A7EJoLVXMXXhRCSSM2sVPvHu3VE7JY6jzFZJ6Uyrr6R/t1+dKYU1+eFEmVbeVvP8+VMkQE+/wDDf87qKmCaNJGnoDduH4VWkjooka5B4D8KrSRraqZ5CLoETRm9UMZH6Pz7qNyIL0P2jGMotzFSmQ0BteXxFdU2QfOWuq+SmDONwpaR94rqaEPItdXVxrjjqLsbYceA+JoQKOY+Bo4sjizALccr2NvjQLe0vk1fp34Wv+1gYVLE+VgRwqJRc0Rw2yZXsQunWiGdlLstbRTPGJB76vSbSjjVUGpCgaeA403C4Rox3cg3i45fO6oU2O0jMVYCx1vv6HdUThuwRXbtyihPjySSABeoZsa+VteB4dKJPsWxK94CeIF7DoTbfQrEwFSUPhXbEi/qbuEz1TZSWhiA4RoP9IpjbXhEywd4pka9lGtiBezEaA2G7fWY2fJjcZHGkZ7iFUVGk3ySZRlbJxAuDut4ndWj2RsOHDD9mvpH1nbV29/AdBYVowk2lg81ZXGLe58+y/8AQpXV1dRQB1OFNpwriTNts6OXGYgulyEhswJVhcPezKQdbDyqxNsON1yM+IKaHKcRMV0Nx6LORoQD7qdFpjZh9aKFh7mlU/lRSsbUSkrHhntfptdc9NFtJ8ewOOyVO+XFHxxM/wD96Y2woD6yF/8AqPI/+9jVrGY+OIAu4BbRV1LseSoLsx8BUaSYqTWLCMBwad1iB65BmfzAoSc35G5Roh2l/gq47ZKLCww8SJIuWRMqqt3jYSJcgc1Aq1svHDEy4rFLcJLIoUMLELHFGliDuIbOKbiosdHG8jrhAsal2/ay3CqCTqY7bhT+z8BTDxhhZ2Bkf78hLt8WpzRxe55ML61ZXsW3t/BDjuz0MjGQL3ch3sgX0vvowKP7wa7BbNlgYNC2EDD2mwUIk8c0TJ+FF66n3XB9owYaiyCwmVcR9LlFp8ZIV4pAqwKfFlvJ/qFdhMJHEuSNAg32HE8STvJ6mrJppqYwjHpFZ3Tn+TENNNKTXGrgShtrFd1BLIN6o1vvEWUeZFYXDx5UC/VAHvA41pO1uIv3UP137x/uR2OvixXyNAJT1P8A2+d1ZmsnmSj7HofpNW2tyfllaQ6DXf8APyahbjr8amlO469N3z76iY0sjUZWZjSM560634VzIb6a61cG0wuZ3VRqwFhuJAt88aqNin+u3ma1HZjZ0UsGeQZ2JKkEn0baAW+PvrM7WwojmkjS5VWsOPW16osbsF88ZRVfEOT6x8zUZnf6x8zSEUx+FXSBts7PXUy9dU4Iyyu+8V1I9deii/kWlpK6uJCfZ5FOITNY2uyg6BnUEotzza1EMTDJKMjfvSbv0N9b8tazorbYKIiNO7Ki4uxIuSfG9DcN00xmvVuqEoxXax+vI3Z2x0j1IzNzO6ioqmEk/iL/AEf5p4ik/if6BRMCLeSTExKQGY2y63/EHpVN8QW0jGReftN4chT8cpEagnN6YzG1tNbXA62qEVxwqKALCh21cPufzokKZMl1IqGsloy2vJc7G4oIDhmPDvYuqt+8XxDa+DVq71mIOzYMcckchEthIjj1VJFwtuI1seetV8U2KxUv0OW2GVVDSAH05RxMfND8ON91M02rak+/Bl6ilTsco9efgvTbfaSYQ4NFkysO9ka/dqt9QCN5Oov5X4aOqmAwMcMYjjUKo8yebHietWr0xFPyJzlHqK4Frq6uqxQD7UPd4mCX2XD4dzwBazxk/wAyEfzCpsbiHzJDCA00l8ub1UUetLJb2VuNOJIFWsfhEljaJ75WG8aEHeGU8GBAIPShexsV9EklbGZ2aTKq4hELR92gsqMEu0ZzZmNxYlt9Z+pobluSPQ/S9fGFXoyeHnh/Bo9kbDjgu+skrevK+sjdB9ReSrYUVoJ/4rwX/q4vDOL+W+quI7SmT0cHG0rHTvZFaOBepZgDJ4KPeKUUJyeEjRndXBZclgd2om71o8GuveESTfZhQ3sfvsAtuWblU9Utn4HuwzO5klkOaWRtC7bgAPZQDQLwFXa1KKtkceTzGt1Xr2ZXS6OpK69MZwLAkAk2AJ3nfYc6OKDqQ116zG08U+ExSzO7Nh5rRvckiNhuIHAbz/V0qJPBMIb3hdhnbGzlxETRMSL2IIOoYag24i/Cg2x9ryRyfRMYQJB+7lPqyrwuefX3b9+kvWS7aTxyZcOADICHZv4S8r/WbdblryqlrUFuDaeLsfp4zn/r5H4Z++kkxBFwx7uLpGhPpD7zEnwtTpFFtwq5FFZFA0AUC3u3W/Kq0kJtvrEsm5ycmevoqVdaivBUkUbrDdu+eFV5E9FtOBq3PBrv4VXxERCH0uGulVQUCsPyp6bx1P8AinLCCdTpf5/7UuGh9NR1A+NGAGsKBV9G6kjWxIvbnahs0YGu/j/mjEkYtxqjLGLa3NCQXAEkj1O6qWLQAA9aMPALnU1QxsICjXW+lXiyklwCbDlXVY+inn8K6i5QHDA7Vwrmp8CgnXgL0bwJ9sVUJ4fPvqxHgi3toPE/2qKRwOtNWY76ryE+1dhdNgMRcvp0Un86ObPTu/2ZN7DMp6biPP8AGodhbSLp6dib2qTGvlYMPZN/cfWFDjN7sMNOuLhmP8hEGnA1GjXFxTgaOJCyIGUqdxFqFoTuO8Gx8RRUGqGNTK4bg2h8Ru8x+FQcNBpaYDSg1xxqOzM47tTJpHEcjNwuDovlbzo/tfAQYtUD2Y5rpIjWkQgE3R11U/Jrz/CYgqSl7JIQT99Qcp94JHuFaXs8GRi59UkC/DiD+IpO2ue9TfS6Ha6tOqHJPEuMr38CTYPF4f2fpUY3MllxCj7UZssnipB6UzCbWikORXs43xuCkg8UezfCtheqG2NnRTJaWNJAPrKCR4HePdTFeslHiXIhd9NrnzHhg29dehG2NmJCyx4OWcTSH9lFnEkVtM0kneBmRFG8g8gKuNs3HpubDzeIkhb4Zx+FN/62pfk8GfL6Zcvx5Ld669CDtSZZDC+ElMiqHYRMkoVSbAtYgi5BsCLm26psNtRHfuykkb5S2WWN4yVUgEgsLGxYbjxpiNsJ9MVnp7Idpl/IvIeQp16o4/HZCscamSWU5YohvY8ST7KDeWO4URw3ZNnGbE4qUufZgIiiTouhZ/FjryFDt1EK+GEp0tlyyuhl6S9VJYJMNiFw7yGVJEZ4XYASDIVDpJlADEZ1IYAXF77tbVErsjOOYgbaZVS2vsW9AO1uCZ4lmj0lw57xDxIHrL10ANuluNHHcDeQPHSh+I21h49HmjB5BgzH+Vbk1aWGsMityUk0sk2y8es8SSpucXtyO5l9xuKXaWCSaN439VhbqDvDDqDrWY2JJLFJMuGgeSF2zxl7xKhI1Hpi+XhoOAosdmSy/wDmpfR/hRXSPwd/Wf4DpVU3JdF5wUJ5TwvHuZ/CdoJYovo+XPKkhiSX1orC9jceswAOnIC9VUiGtyWZjmZifSZuZPP4CiPaOZElhiUBUjRnyqLAFzlXQdA3nVFMbHe5PU6eWn5cKztTKWdveD0H0+uGz1MYbNgiDKPAVWcCp02pCV9cbuOlQPiozrmXfzFI8mqirOBequMIyMelWp8TGPaXzFUcZi48hAZfcRUpHNgyQ1JgU/aIQPaH41XOKT61t/Py+d9S4TaMayLvtmB0/KjYYFtGykGh0qnKOm6mT7fitvPlVJ9vx/a8vnWhKLCuS9x7qddKobQX0RpSybfjudG8hVPE7YR7Cx38QOFXUWUc4+5Wynl/urqb+sU+15mlq+H7A90fcBtUsHteFRNUuH9r7pph9CK7GOaaK40tSQG9gPa/3vyozO95B7qBbBax9/5UWke8gHUUrNfcx6p/Yghh/RLRn2Dp906r/b3VYBqlg8EMQXlkdwoZo41RimiGxLEaklr0mORsLZjJnjJAIcjvEvpdT7Y6b6djVLZuMqepr9VwXuXwaZiY86FePDxG6uV6eGqgUFxvcX8/HjTga7Eplk6PqPEb/wC9NBrjhXFxpoeB5EbjXoGy9pRSQpYZbrYrbQEaMPO9ef3q1srEKkmWSWaKJvWMTKuVjYZmupbLpwItS2ppVkcewSuTjLg9E2Xis4KE+nGcrDjb2W94pu19ppBGWb02JCRxrrJI7aLGg5k8eAueFVYuyGEPpsZZSwBzPPKcw4eqwBFX8D2ewkLh4sPGrjc+W7i4sbObndS2V2xuT9kVtg7DePNNMwbESgZyPVRRqsMf2F+JuadtzHGEIkYDzynJDHe2ZuLufZRRqx928ir+1tqR4aMyyE2FgqjV3c6KiL7TE6AUI2Ts9yzYnFAGeQWy3usMe9YU8N7N7R6AVGxSe6Ryk+kTbH2cYI2GfPLI3eTSEj9o/EnkBuC7gABWV2/tErtFY4o2lkbDhI1Uiwd5GZszH1UsiEmtNtfHpDlRI+8mlusUQOrnizH2Y13lju8as7B2J3JaaVhJiZbd7IBYADdFGPZjXzO80xC3Y8r9Aba1OO1/sTs7sL6OGkkYSYiUDvJLaAbxHGPZjHx3mjZYXtcX3242G8299DdsbWTDoGILu5yRRp68rnciD8TuA1NV9jbLZXbE4hg+JkFjb1IkvcQxfZBtdt7EX5ABk3LMpMtGKikkY39LeIs+FRSQQsr3UkGxMajUeB8qy/Zp45JDFOXYvrGxkkAvxQgNbqPeOVE/0nSl8flFyIoo104Fi7n4FayJQ8iOR1BBHEHgacolsSYG6lWxa6fuekDs/heMKN967f7iauwYaNNERE+6qr+AoFsDb+e0UxtLuVjoJfDk/MeVaC9atcoyWUecuhZXLbPI8tTWcAEnQDUnpTc1ZbtdtgBTh4z6TD9qR7K/V8T+HjXWTUI5ZFNUrZpIzW0cZ30skvB29H7q+ivwF/fVe9MApQp5GstvLyeohFQiorwEs+nx/wA/5quXNSGNzuUn3Hzpgwkp3Ruf5TQ0g7ZA5qNjV39VzndFJ/Sa79TYg/8ABk/pNWQN5B96fD6wq+Ng4r+BJ/TT4+z+Kv8AuH8qkjDIXeoS9EX2FiR/wm+FQnYWJ/hPULBZ5Bhamk0S/UOJ/gv5Vx2Biv4L+VTlA2pewNrqI/8Ah/FfwH8q6pyiMP2A7VJht5+6fwqJqlw3re4/gau+gK7IzS0ldUkBbYm/3/lRB3/aqBrqN1CdnThASa0WxEIGdhqaXs4bY7VzFIm2blvJhpV0djJGG0DqxuwHUNr76XJFGWyYNy2q5mC2tqL94zGy2/7URxEUcqZZBe2qkGzKeasNQaAY1nz9008jRE5SDlDHoXAuRwNNU6lbVF9oy9ToJeo5xfD7XI/ZU791H+zJGXQ5hu4b+lqufSH/AITf1L/eqIhA0ERsNBZ/80uT/lP/AO5/+qgMWsRmdT6BUr6S3INyOGh5VVR7i/Onx6EERyafbuPLNUUi5XK8D6S+/ePOuOJM1MjxCNorKediDVfEsLLnv3ede8t9S/pbuH5VoJsHhplAXIDa6NGVDL1BX8DV4V7/ACL3ahUtZTaZc2Tt3GLBkR8OkcR7sNKrF7AAgeuosAQPdVebtZOTlfHRDmMPEpf3Xz/hWc2rslYXDC/dvoGyLI4fQZbt9bf43pEjNrBMQw6skS+S2pS2pQk00aGntVsFKJsNkY2ORhPHh8bjJEJVZZSmVD7QQOVRDrrZb60f+lY9/UwkUfWWe5H8sSN+NY7sXtT6LOY5AI4p/rSBssqgkMx4BlFjc7wtbibtRgk0bFQg8hIpPkDS8+8JZDLK+CXYeyO6LSyv3uIk/eSWsABujjX2Ixy47zrU22dsJh1XQySyHLFEnryPyHIDeWOgFBMf25wyqTDmmcAkKisF04tIwCqPM9Kn7M4Qsq4yY58RPGrEkaRowDCKMeyovrxJ1NVaf5SO+EXNj7KdXOJxLCTEuLafu4UOvdRA7hzbex8qNZqgzV2eqN5OSwYmJ2fE4ySwIafIL23RRxx216g1ZCf8sfCstsvafoM1/wB5JLJ495I7/gRRBdsHX5+d1GlnIaK+1BabARyqUkiDKeH5g8D1FUTsvER6Qy5k4JOpcr0EqkMR43qzg9o3BNxv51P+sB8mphbOD+1lLdPC1YkkweNm4yTSSRIk490pLnwdzZfKimC2RFEgRIhbeSfSZid7Mx1JPOuG0NB1qUY0VM7pz/JlatLXV+McEq4Nf4a+QqGdOARdOgqT6X1rNvtn0j4m/wAbVTOQyj7hwhhuC/ClXP0rPnax5jjzqTC7Wuwri2DQ2k6edOVX6ULG0+opybT6g1GTtrCyq/MedPCPzFDl2gCN9S/ThzqyZ21iY0PewI3c6rXfmKDbU2we8IB4gVUG2DprxrkmzuEaZA994qfLJzFZrCbWuw9IcavfrbqK5/wSgxlfmK6g/wCtetdUfonB5a1OiazA1MIxTgg5U+ZKTyV66kNdXFSaDePGtFHtGw0X41ncL6wog+n9IPj08KFYssZqk1ELDa55fHTxPSg+LxWZieZ/tUmWw948zx93KqeJWzEdaiMUXnJtBRMbGwu9w246mx8jTxiIebeb/wB6CL+dOTeKJkX9NBwTw/XbzeuxGKiKizm66g2Ym3EUIXhTlOoFRuLel8hXA4V8RqGCR8SCDIegA9X30fwWFgjNo0QMotcWL2PM79axfcK2trEm2nzrU+HjKqMrsqsSCFsLgc2AuaPXfGHgRv0Nln/Lj2CnabaisO4Q31BkI3CxuFB53t4WoDnXjmOnFmOvvNPxKj0bCw1AA6H41XH5UKybseWNaehUQ2r9kyOn8Nd3IH8auQ48KNFA8ABQ1akXdQ3FMYUsdBDF7SLRuANWUqNeYtXs+GTIiINyqq/0gD8q8Pwa5poVO5poQfAuoNe2k0vekkkiyk5Pknz1T2ziu7w80n1IpGHiEJHxqW9Ae20pGCntxVV9zOqn4GgRWWkWfCPLMPiSihRwAHwqU4w6799UyLedKTv8aecUDU2lgL4bamUEa76sJtjnfxoLH+dOv041V1oIrGH/ANbjQa8LdPHpUybYHP4fE9OlZxG03cfk1YjOoHXf151GxFlYw++2hbceO/8AE9eQrMnFm9/E1cbj0Nh7+J5mhFTCCKzsZa+mH5/Knx48gg1RNKtW2oH6kgqNqH5NSRbVIB08Nfh1FCqeldsRdWSC6bXPK/v+dKmG2m5eZ+J6chQZxa9vrAHr88qmEduPtAf5qNqJ9SRBi8YWctzP9qh7802cekfGoxV0lgDKcslmLFEG+tTrtBt/50PWn1DiiVZIv/rI9fOuqjmrq7Yid8j/2Q=="
                        alt="Profile img"
                    />
                    <Dropdown user={ user }/>
                </div>
                <div className="d-flex flex-column justify-content-end mx-auto">
                    <Link href={ '/profile' }>
                        <button className="btn my-1" type="button">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                width="30"
                                height="30"
                            >
                                <path
                                    strokeLinecap="round" strokeLinejoin="round"
                                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                            <label>Profile</label>
                        </button>
                    </Link>
                    <Link href={ '/friends' }>
                        <button className="btn my-1" type="button">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                width="30"
                                height="30"
                            >
                                <path
                                    strokeLinecap="round" strokeLinejoin="round"
                                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                                />
                            </svg>
                            <label>Friends</label>
                        </button>
                    </Link>
                    <Link href={ '/groups' }>
                        <button className="btn my-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                width="30"
                                height="30"
                            >
                                <path
                                    strokeLinecap="round" strokeLinejoin="round"
                                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                                />
                            </svg>
                            <label>Groups</label>
                        </button>
                    </Link>
                    <Link href={ '/findnewfriends' }>
                        <button className="btn my-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                width="30"
                                height="30"
                            >
                                <path
                                    strokeLinecap="round" strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                />
                            </svg>
                            <label>Find friends</label>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar