import { get } from "svelte/store";

    export enum SocialMediaNames {
        FACEBOOK = "fb",
        TWITTER = "tw",
        INSTAGRAM = "ig",
        LINKEDIN = "li",
        GITHUB = "gh",
        YOUTUBE = "yt",
        TIKTOK = "tt",
        SNAPCHAT = "sc",
        REDDIT = "rd",
        PINTEREST = "pi",
        TUMBLR = "tb",
        TELEGRAM = "tg",
        WHATSAPP = "wa",
        VIBER = "vb",
        STACKOVERFLOW = "so",
        DISCORD = "dc",
        SLACK = "sl",
        MEDIUM = "md",
        QUORA = "qr",
    }

    export interface SocialMedia {
        name: SocialMediaNames;
        fullName: string;
        url: string;
        color: string;
        icon: string
    }

    export const socialMedia: SocialMedia[] = [
        {
            name: SocialMediaNames.FACEBOOK,
            fullName: "Facebook",
            url: "https://www.facebook.com/${username}",
            color: "#3b5998",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/> </svg>'
        },
        {
            name: SocialMediaNames.TWITTER,
            fullName: "Twitter",
            url: "https://twitter.com/${username}",
            color: "#1da1f2",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/> </svg>'
        },
        {
            name: SocialMediaNames.INSTAGRAM,
            fullName: "Instagram",
            url: "https://www.instagram.com/${username}",
            color: "#c32aa3",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/> </svg>'
        },
        {
            name: SocialMediaNames.LINKEDIN,
            fullName: "LinkedIn",
            url: "https://www.linkedin.com/in/${username}",
            color: "#0077b5",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16"> <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/> </svg>'
        },
        {
            name: SocialMediaNames.GITHUB,
            fullName: "GitHub",
            url: 'https://github.com/${username}',
            color: "#333",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"> <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/> </svg>'
        },
        {
            name: SocialMediaNames.DISCORD,
            fullName: "Discord",
            url: 'https://discord.com/users/${username}',
            color: "#7289DA",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-discord" viewBox="0 0 16 16"> <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/> </svg>'
        },
        {
            name: SocialMediaNames.YOUTUBE,
            fullName: "YouTube",
            url: 'https://www.youtube.com/channel/${username}',
            color: "#c4302b",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16"> <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/> </svg>'
        },
        {
            name: SocialMediaNames.MEDIUM,
            fullName: "Medium",
            url: 'https://medium.com/@${username}',
            color: "#000000",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-medium" viewBox="0 0 16 16"> <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"/> </svg>'
        },
        {
            name: SocialMediaNames.PINTEREST,
            fullName: "Pinterest",
            url: 'https://www.pinterest.com/${username}',
            color: "#BD081C",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pinterest" viewBox="0 0 16 16"> <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z"/> </svg>'
        },
        {
            name: SocialMediaNames.QUORA,
            fullName: "Quora",
            url: 'https://www.quora.com/profile/${username}',
            color: "#A82400",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-quora" viewBox="0 0 16 16"> <path d="M8.73 12.476c-.554-1.091-1.204-2.193-2.473-2.193-.242 0-.484.04-.707.142l-.43-.863c.525-.45 1.373-.808 2.464-.808 1.697 0 2.568.818 3.26 1.86.41-.89.605-2.093.605-3.584 0-3.724-1.165-5.636-3.885-5.636-2.68 0-3.839 1.912-3.839 5.636 0 3.704 1.159 5.596 3.84 5.596.425 0 .811-.046 1.166-.15Zm.665 1.3a7.127 7.127 0 0 1-1.83.244C3.994 14.02.5 11.172.5 7.03.5 2.849 3.995 0 7.564 0c3.63 0 7.09 2.828 7.09 7.03 0 2.337-1.09 4.236-2.675 5.464.512.767 1.04 1.277 1.773 1.277.802 0 1.125-.62 1.179-1.105h1.043c.061.647-.262 3.334-3.178 3.334-1.767 0-2.7-1.024-3.4-2.224Z"/> </svg>'
        },
        {
            name: SocialMediaNames.REDDIT,
            fullName: "Reddit",
            url: 'https://www.reddit.com/user/${username}',
            color: "#FF4500",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reddit" viewBox="0 0 16 16"> <path d="M6.167 8a.831.831 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661zm1.843 3.647c.315 0 1.403-.038 1.976-.611a.232.232 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83.458 0 .83-.381.83-.83a.831.831 0 0 0-1.66 0z"/> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.203.203 0 0 0-.153.028.186.186 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224c-.02.115-.029.23-.029.353 0 1.795 2.091 3.256 4.669 3.256 2.577 0 4.668-1.451 4.668-3.256 0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165z"/> </svg>'
        },
        {
            name: SocialMediaNames.SLACK,
            fullName: "Slack",
            url: 'https://${username}.slack.com',
            color: "#4A154B",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-slack" viewBox="0 0 16 16"> <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z"/> </svg>'
        },
        {
            name: SocialMediaNames.STACKOVERFLOW,
            fullName: "Stack Overflow",
            url: 'https://stackoverflow.com/users/${username}',
            color: "#F48024",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-stackoverflow" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M4 17v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-1" /> <path d="M8 16h8" /> <path d="M8.322 12.582l7.956 .836" /> <path d="M8.787 9.168l7.826 1.664" /> <path d="M10.096 5.764l7.608 2.472" /> </svg>'
        },
        {
            name: SocialMediaNames.SNAPCHAT,
            fullName: "Snapchat",
            url: 'https://www.snapchat.com/add/${username}',
            color: "#FFFC00",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-snapchat" viewBox="0 0 16 16"> <path d="M15.943 11.526c-.111-.303-.323-.465-.564-.599a1.416 1.416 0 0 0-.123-.064l-.219-.111c-.752-.399-1.339-.902-1.746-1.498a3.387 3.387 0 0 1-.3-.531c-.034-.1-.032-.156-.008-.207a.338.338 0 0 1 .097-.1c.129-.086.262-.173.352-.231.162-.104.289-.187.371-.245.309-.216.525-.446.66-.702a1.397 1.397 0 0 0 .069-1.16c-.205-.538-.713-.872-1.329-.872a1.829 1.829 0 0 0-.487.065c.006-.368-.002-.757-.035-1.139-.116-1.344-.587-2.048-1.077-2.61a4.294 4.294 0 0 0-1.095-.881C9.764.216 8.92 0 7.999 0c-.92 0-1.76.216-2.505.641-.412.232-.782.53-1.097.883-.49.562-.96 1.267-1.077 2.61-.033.382-.04.772-.036 1.138a1.83 1.83 0 0 0-.487-.065c-.615 0-1.124.335-1.328.873a1.398 1.398 0 0 0 .067 1.161c.136.256.352.486.66.701.082.058.21.14.371.246l.339.221a.38.38 0 0 1 .109.11c.026.053.027.11-.012.217a3.363 3.363 0 0 1-.295.52c-.398.583-.968 1.077-1.696 1.472-.385.204-.786.34-.955.8-.128.348-.044.743.28 1.075.119.125.257.23.409.31a4.43 4.43 0 0 0 1 .4.66.66 0 0 1 .202.09c.118.104.102.26.259.488.079.118.18.22.296.3.33.229.701.243 1.095.258.355.014.758.03 1.217.18.19.064.389.186.618.328.55.338 1.305.802 2.566.802 1.262 0 2.02-.466 2.576-.806.227-.14.424-.26.609-.321.46-.152.863-.168 1.218-.181.393-.015.764-.03 1.095-.258a1.14 1.14 0 0 0 .336-.368c.114-.192.11-.327.217-.42a.625.625 0 0 1 .19-.087 4.446 4.446 0 0 0 1.014-.404c.16-.087.306-.2.429-.336l.004-.005c.304-.325.38-.709.256-1.047Zm-1.121.602c-.684.378-1.139.337-1.493.565-.3.193-.122.61-.34.76-.269.186-1.061-.012-2.085.326-.845.279-1.384 1.082-2.903 1.082-1.519 0-2.045-.801-2.904-1.084-1.022-.338-1.816-.14-2.084-.325-.218-.15-.041-.568-.341-.761-.354-.228-.809-.187-1.492-.563-.436-.24-.189-.39-.044-.46 2.478-1.199 2.873-3.05 2.89-3.188.022-.166.045-.297-.138-.466-.177-.164-.962-.65-1.18-.802-.36-.252-.52-.503-.402-.812.082-.214.281-.295.49-.295a.93.93 0 0 1 .197.022c.396.086.78.285 1.002.338.027.007.054.01.082.011.118 0 .16-.06.152-.195-.026-.433-.087-1.277-.019-2.066.094-1.084.444-1.622.859-2.097.2-.229 1.137-1.22 2.93-1.22 1.792 0 2.732.987 2.931 1.215.416.475.766 1.013.859 2.098.068.788.009 1.632-.019 2.065-.01.142.034.195.152.195a.35.35 0 0 0 .082-.01c.222-.054.607-.253 1.002-.338a.912.912 0 0 1 .197-.023c.21 0 .409.082.49.295.117.309-.04.56-.401.812-.218.152-1.003.638-1.18.802-.184.169-.16.3-.139.466.018.14.413 1.991 2.89 3.189.147.073.394.222-.041.464Z"/> </svg>'
        },
        {
            name: SocialMediaNames.TELEGRAM,
            fullName: 'Telegram',
            url: 'https://t.me/${username}',
            color: "#0088cc",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/> </svg>'
        },
        {
            name: SocialMediaNames.TIKTOK,
            fullName: 'TikTok',
            url: 'https://www.tiktok.com/@${username}',
            color: "#000000",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16"> <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/> </svg>'
        },
        {
            name: SocialMediaNames.TUMBLR,
            fullName: 'Tumblr',
            url: 'https://${username}.tumblr.com/',
            color: "#000000",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" zoomAndPan="magnify" viewBox="0 0 30 30.000001" height="40" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><filter x="0%" y="0%" width="100%" xlink:type="simple" xlink:actuate="onLoad" height="100%" id="id1" xlink:show="other"><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" color-interpolation-filters="sRGB"/></filter><filter x="0%" y="0%" width="100%" xlink:type="simple" xlink:actuate="onLoad" height="100%" id="id2" xlink:show="other"><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0.2126 0.7152 0.0722 0 0" color-interpolation-filters="sRGB"/></filter><clipPath id="id3"><path d="M 6.066406 3 L 22.761719 3 L 22.761719 24.675781 L 6.066406 24.675781 Z M 6.066406 3 " clip-rule="nonzero"/></clipPath><mask id="id4"><g filter="url(#id1)"><g filter="url(#id2)" transform="matrix(0.134625, 0, 0, 0.134409, 6.066997, 2.903235)"><image x="0" y="0" width="124" xlink:href="data:image/png;base64,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" xlink:type="simple" xlink:actuate="onLoad" height="162" preserveAspectRatio="xMidYMid meet" xlink:show="embed"/></g></g></mask></defs><g clip-path="url(#id3)"><g mask="url(#id4)"><g transform="matrix(0.134625, 0, 0, 0.134409, 6.066997, 2.903235)"><image x="0" y="0" width="124" xlink:href="data:image/png;base64,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" xlink:type="simple" xlink:actuate="onLoad" height="162" preserveAspectRatio="xMidYMid meet" xlink:show="embed"/></g></g></g></svg>'
        },
        {
            name: SocialMediaNames.VIBER,
            fullName: 'Viber',
            url: 'viber://pa?chatURI=${username}',
            color: '#59267c',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. --><path d="M444 49.9C431.3 38.2 379.9.9 265.3.4c0 0-135.1-8.1-200.9 52.3C27.8 89.3 14.9 143 13.5 209.5c-1.4 66.5-3.1 191.1 117 224.9h.1l-.1 51.6s-.8 20.9 13 25.1c16.6 5.2 26.4-10.7 42.3-27.8 8.7-9.4 20.7-23.2 29.8-33.7 82.2 6.9 145.3-8.9 152.5-11.2 16.6-5.4 110.5-17.4 125.7-142 15.8-128.6-7.6-209.8-49.8-246.5zM457.9 287c-12.9 104-89 110.6-103 115.1-6 1.9-61.5 15.7-131.2 11.2 0 0-52 62.7-68.2 79-5.3 5.3-11.1 4.8-11-5.7 0-6.9.4-85.7.4-85.7-.1 0-.1 0 0 0-101.8-28.2-95.8-134.3-94.7-189.8 1.1-55.5 11.6-101 42.6-131.6 55.7-50.5 170.4-43 170.4-43 96.9.4 143.3 29.6 154.1 39.4 35.7 30.6 53.9 103.8 40.6 211.1zm-139-80.8c.4 8.6-12.5 9.2-12.9.6-1.1-22-11.4-32.7-32.6-33.9-8.6-.5-7.8-13.4.7-12.9 27.9 1.5 43.4 17.5 44.8 46.2zm20.3 11.3c1-42.4-25.5-75.6-75.8-79.3-8.5-.6-7.6-13.5.9-12.9 58 4.2 88.9 44.1 87.8 92.5-.1 8.6-13.1 8.2-12.9-.3zm47 13.4c.1 8.6-12.9 8.7-12.9.1-.6-81.5-54.9-125.9-120.8-126.4-8.5-.1-8.5-12.9 0-12.9 73.7.5 133 51.4 133.7 139.2zM374.9 329v.2c-10.8 19-31 40-51.8 33.3l-.2-.3c-21.1-5.9-70.8-31.5-102.2-56.5-16.2-12.8-31-27.9-42.4-42.4-10.3-12.9-20.7-28.2-30.8-46.6-21.3-38.5-26-55.7-26-55.7-6.7-20.8 14.2-41 33.3-51.8h.2c9.2-4.8 18-3.2 23.9 3.9 0 0 12.4 14.8 17.7 22.1 5 6.8 11.7 17.7 15.2 23.8 6.1 10.9 2.3 22-3.7 26.6l-12 9.6c-6.1 4.9-5.3 14-5.3 14s17.8 67.3 84.3 84.3c0 0 9.1.8 14-5.3l9.6-12c4.6-6 15.7-9.8 26.6-3.7 14.7 8.3 33.4 21.2 45.8 32.9 7 5.7 8.6 14.4 3.8 23.6z"/></svg>'
        },
        {
            name: SocialMediaNames.WHATSAPP,
            fullName: 'WhatsApp',
            url: 'https://wa.me/${username}',
            color: '#25D366',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/> </svg>'
        }
    ]

    export function getSocialMedia(name: string) {
        return socialMedia.find(s => s.name === name) || null;
    }

