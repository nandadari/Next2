import  aboutPage from "@/app/about/page";
import {render, screen} from "@testing-library/react";
import AboutLayout from "@/app/about/layout";
import { describe } from "node:test";

describe("About page", () => {
    it ("should render", () => {
        const page = render(
            <AboutLayout>
                <aboutPage/>
            </AboutLayout>,
        );
        expect(page).toMatchSnapshot();
    } );
})



