import {
  LucideProps,
  Moon,
  SunMedium,
  Twitter,
  Linkedin,
  Users,
  Zap,
  Rocket,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  linkedin: Linkedin,
  users: Users,
  zap: Zap,
  rocket: Rocket,
  collaborate: (props: LucideProps) => (
    <svg width="43" height="41" viewBox="0 0 43 41" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M21.8528 3.00884C21.2052 3.00884 20.5841 3.25385 20.1261 3.68998C19.6682 4.12612 19.4109 4.71764 19.4109 5.33442C19.4109 5.9512 19.6682 6.54272 20.1261 6.97885C20.5841 7.41498 21.2052 7.66 21.8528 7.66C22.5004 7.66 23.1215 7.41498 23.5794 6.97885C24.0374 6.54272 24.2946 5.9512 24.2946 5.33442C24.2946 4.71764 24.0374 4.12612 23.5794 3.68998C23.1215 3.25385 22.5004 3.00884 21.8528 3.00884ZM16.4807 5.33442C16.4807 3.9775 17.0467 2.67615 18.0541 1.71666C19.0616 0.757175 20.428 0.21814 21.8528 0.21814C23.2775 0.21814 24.644 0.757175 25.6514 1.71666C26.6589 2.67615 27.2249 3.9775 27.2249 5.33442C27.2249 6.69134 26.6589 7.99269 25.6514 8.95218C24.644 9.91166 23.2775 10.4507 21.8528 10.4507C20.428 10.4507 19.0616 9.91166 18.0541 8.95218C17.0467 7.99269 16.4807 6.69134 16.4807 5.33442ZM31.6007 11.2209C32.7167 10.9896 33.8833 11.175 34.86 11.7389C35.8366 12.3028 36.5487 13.2022 36.8494 14.2516C37.1501 15.3009 37.0164 16.4202 36.476 17.3784C35.9355 18.3366 35.0295 19.0608 33.9449 19.4014L29.6941 20.7502C29.4723 20.8202 29.2522 20.8946 29.0338 20.9735C28.955 21.0206 28.892 21.0882 28.8522 21.1683C28.8124 21.2484 28.7975 21.3377 28.8092 21.4256C28.8191 21.4633 28.8308 21.5005 28.8443 21.5372C28.8853 21.6526 28.9459 21.8033 29.0475 22.0544L31.4835 28.086C31.875 29.0589 31.8665 30.1366 31.4598 31.1037C31.0531 32.0709 30.2782 32.8562 29.2898 33.3028C28.3015 33.7493 27.1726 33.8242 26.1288 33.5124C25.085 33.2006 24.2033 32.5251 23.6598 31.6209L21.8528 28.6144L20.0458 31.6247C19.5029 32.5301 18.6208 33.2069 17.5763 33.5194C16.5317 33.8319 15.4018 33.7571 14.4127 33.31C13.4236 32.8628 12.6483 32.0764 12.2421 31.1081C11.8359 30.1397 11.8288 29.061 12.2221 28.0879L14.6581 22.0563C14.7287 21.8855 14.7964 21.7137 14.8612 21.5409C14.8748 21.5043 14.8865 21.467 14.8964 21.4293C14.9085 21.3411 14.8937 21.2515 14.8539 21.171C14.8141 21.0905 14.7509 21.0226 14.6718 20.9753C14.4527 20.8965 14.2319 20.822 14.0095 20.7521L9.76264 19.4033C8.67798 19.0626 7.77197 18.3385 7.23152 17.3803C6.69107 16.422 6.55741 15.3028 6.85811 14.2534C7.15881 13.2041 7.87093 12.3047 8.84757 11.7408C9.82421 11.1769 10.9909 10.9914 12.1068 11.2228L15.8126 11.9781L16.215 12.06C19.9342 12.7925 23.7714 12.7925 27.4905 12.06C27.5882 12.0414 27.6859 12.0228 27.893 11.9781L31.5987 11.2228L31.6007 11.2209ZM34.0621 15.3735C34.0621 14.4451 33.1635 13.7549 32.2141 13.9502L28.5025 14.7074L28.0844 14.7912C23.8332 15.6289 19.4439 15.6004 15.2051 14.7074L11.4934 13.9502C11.1101 13.8685 10.7084 13.9305 10.3718 14.1235C10.0353 14.3164 9.78967 14.6254 9.68607 14.9863C9.58248 15.3472 9.62884 15.7322 9.81554 16.0614C10.0022 16.3906 10.3149 16.6386 10.6886 16.754L14.9374 18.1028L15.0449 18.1363C15.4453 18.2628 15.8653 18.3949 16.2072 18.5977C17.3598 19.273 17.9829 20.5326 17.7993 21.8088C17.7446 22.1902 17.5844 22.5809 17.434 22.9567L17.393 23.0553L14.957 29.087C14.8261 29.4041 14.8265 29.7566 14.958 30.0734C15.0895 30.3903 15.3423 30.6478 15.6654 30.794C15.9885 30.9402 16.3579 30.9641 16.6988 30.8611C17.0398 30.758 17.3269 30.5355 17.5024 30.2386L20.5811 25.1074C20.7093 24.894 20.8944 24.7167 21.1177 24.5933C21.341 24.4699 21.5946 24.405 21.8528 24.405C22.1109 24.405 22.3645 24.4699 22.5879 24.5933C22.8112 24.7167 22.9963 24.894 23.1245 25.1074L26.2032 30.2386C26.3786 30.5355 26.6658 30.758 27.0068 30.8611C27.3477 30.9641 27.717 30.9402 28.0401 30.794C28.3633 30.6478 28.6161 30.3903 28.7476 30.0734C28.8791 29.7566 28.8794 29.4041 28.7486 29.087L26.3126 23.0553L26.2735 22.9567C26.1192 22.5809 25.961 22.1902 25.9063 21.8088C25.8168 21.1843 25.9195 20.5484 26.2022 19.9783C26.4848 19.4083 26.9351 18.9287 27.4984 18.5977C27.8422 18.393 28.2602 18.2628 28.6607 18.1363L28.7681 18.1028L33.017 16.754C33.3213 16.6575 33.586 16.4722 33.7736 16.2244C33.9612 15.9767 34.0621 15.679 34.0621 15.3735ZM8.60032 24.2423C8.77491 24.5729 8.80445 24.956 8.68246 25.3074C8.56047 25.6587 8.29692 25.9495 7.94981 26.1158C4.9805 27.5391 3.78302 29.1391 3.78302 30.4507C3.78302 31.8721 5.19734 33.6228 8.64134 35.0981C11.9466 36.5158 16.6174 37.4274 21.8528 37.4274C27.0881 37.4274 31.7589 36.5158 35.0642 35.0981C38.5082 33.6228 39.9226 31.8721 39.9226 30.4507C39.9226 29.1391 38.727 27.5391 35.7558 26.1158C35.5824 26.0343 35.4277 25.9209 35.3006 25.7822C35.1735 25.6435 35.0764 25.4822 35.0151 25.3077C34.9537 25.1331 34.9292 24.9486 34.943 24.765C34.9568 24.5814 35.0086 24.4021 35.0955 24.2377C35.1824 24.0732 35.3025 23.9267 35.4491 23.8067C35.5957 23.6866 35.7658 23.5954 35.9495 23.5382C36.1333 23.4811 36.3271 23.4591 36.5198 23.4736C36.7126 23.4882 36.9004 23.5388 37.0724 23.6228C40.2879 25.1633 42.8528 27.474 42.8528 30.4507C42.8528 33.6544 39.8932 36.0879 36.2676 37.6433C32.5032 39.2563 27.4046 40.2181 21.8528 40.2181C16.301 40.2181 11.2024 39.2563 7.43799 37.6433C3.81232 36.0879 0.852783 33.6544 0.852783 30.4507C0.852783 27.474 3.41771 25.1633 6.63511 23.6228C6.98204 23.4571 7.38382 23.4293 7.75226 23.5454C8.12071 23.6616 8.42571 23.9122 8.60032 24.2423Z" fill="#050218" />
    </svg>
  ),
  logo: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
      />
    </svg>
  ),
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  discord: (props: LucideProps) => (
    <svg viewBox="0 0 20 16" {...props}>
      <path d="M16.3669 1.57019C15.1546 0.99348 13.8421 0.574898 12.4749 0.333051C12.463 0.332659 12.451 0.334955 12.44 0.339777C12.429 0.344598 12.4191 0.351828 12.4111 0.360956C12.2471 0.667917 12.0557 1.06789 11.9281 1.37486C10.4779 1.15161 9.00319 1.15161 7.55305 1.37486C7.42545 1.05859 7.23404 0.667917 7.06086 0.360956C7.05175 0.342353 7.0244 0.333051 6.99706 0.333051C5.62986 0.574898 4.32647 0.99348 3.10511 1.57019C3.096 1.57019 3.08688 1.5795 3.07777 1.5888C0.598589 5.37464 -0.0850079 9.05816 0.252233 12.7045C0.252233 12.7231 0.261348 12.7417 0.279577 12.751C1.92021 13.9788 3.49704 14.723 5.05564 15.216C5.08299 15.2253 5.11033 15.216 5.11944 15.1974C5.48403 14.6858 5.81216 14.1463 6.09471 13.5789C6.11294 13.5416 6.09471 13.5044 6.05825 13.4951C5.53872 13.2905 5.04653 13.0486 4.56345 12.7696C4.52699 12.751 4.52699 12.6952 4.55434 12.6673C4.6546 12.5929 4.75486 12.5091 4.85512 12.4347C4.87335 12.4161 4.90069 12.4161 4.91892 12.4254C8.05435 13.8858 11.4359 13.8858 14.5349 12.4254C14.5531 12.4161 14.5804 12.4161 14.5987 12.4347C14.6989 12.5184 14.7992 12.5929 14.8994 12.6766C14.9359 12.7045 14.9359 12.7603 14.8903 12.7789C14.4164 13.0673 13.9151 13.2998 13.3955 13.5044C13.3591 13.5137 13.35 13.5602 13.3591 13.5882C13.6507 14.1556 13.9789 14.6951 14.3343 15.2067C14.3617 15.216 14.389 15.2253 14.4164 15.216C15.9841 14.723 17.5609 13.9788 19.2015 12.751C19.2198 12.7417 19.2289 12.7231 19.2289 12.7045C19.6299 8.49075 18.5635 4.83513 16.4034 1.5888C16.3942 1.5795 16.3851 1.57019 16.3669 1.57019ZM6.56867 10.4813C5.62986 10.4813 4.84601 9.59767 4.84601 8.50936C4.84601 7.42104 5.61164 6.53737 6.56867 6.53737C7.53482 6.53737 8.30045 7.43034 8.29134 8.50936C8.29134 9.59767 7.52571 10.4813 6.56867 10.4813ZM12.9216 10.4813C11.9828 10.4813 11.1989 9.59767 11.1989 8.50936C11.1989 7.42104 11.9645 6.53737 12.9216 6.53737C13.8877 6.53737 14.6533 7.43034 14.6442 8.50936C14.6442 9.59767 13.8877 10.4813 12.9216 10.4813Z" />
    </svg>
  )
}
