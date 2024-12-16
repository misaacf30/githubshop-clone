import { query } from "./strapi";

export function getHomeInfo() {
    return query("home?fields[0]=title&populate[hero1][populate][image][fields][0]=url&populate[hero2][populate][image][fields][1]=url&populate[row2categories][populate][firstCategory][populate][image][fields][2]=url&populate[row2categories][populate][secondCategory][populate][image][fields][3]=url&populate[row3categories][populate][firstCategory][populate][image][fields][4]=url&populate[row3categories][populate][secondCategory][populate][image][fields][5]=url&populate[row3categories][populate][thirdCategory][populate][image][fields][6]=url&populate[row3categories][populate][bgImage][fields][7]=url")
        .then(res => {
            if(res.data === null) return { title: null, hero1: null, hero2: null, row2categories: null, row3categories: null}

            const { title, hero1, hero2, row2categories, row3categories } = res.data

            return { title, hero1, hero2,row2categories, row3categories }
        })
    }