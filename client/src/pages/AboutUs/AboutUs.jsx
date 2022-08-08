import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import "./style.css"
import { useMediaQuery } from "@mui/material"
export default function AboutUs() {
  const matches = useMediaQuery("(min-width:1160px)")
  const data = [
    {
      fullName: "Hassan Hassouna",
      title: "Full Stack Developer",
      image:
        "https://ca.slack-edge.com/T03DN6MRQ75-U03EFPZNYH3-ffb917917bce-512",

      linkedIn:
        "https://www.linkedin.com/in/hassan-hassouna-junior-full-stack-developer/",
    },
    {
      fullName: "Chen Azulai",
      title: "Full Stack Developer",
      image:
        "https://media-exp1.licdn.com/dms/image/C5603AQG0D1CPc8VVIQ/profile-displayphoto-shrink_800_800/0/1582954037166?e=1665619200&v=beta&t=qU9H_7svUydUzWryJUXyOi1wIG9g2-pg7aU3_4NFDtU",

      linkedIn: "https://www.linkedin.com/in/chen-azulai-software-engineering/",
    },
    {
      fullName: "Roni Ben Simon",
      title: "Full Stack Developer",
      image:
        "https://media-exp1.licdn.com/dms/image/C4D03AQEe-dUpOmUDgg/profile-displayphoto-shrink_800_800/0/1623751762767?e=1665619200&v=beta&t=-sGQ0SX5jRQjEGSemQQcJfdCN0Iu6bMPmman-vfj-Io",

      linkedIn: "https://www.linkedin.com/in/roni-ben-simon-964527174/",
    },
    {
      fullName: "Yuval Bader",
      title: "Full Stack Developer",
      image:
        "https://media-exp1.licdn.com/dms/image/C4D03AQE0B_33DAqe9g/profile-displayphoto-shrink_800_800/0/1641799636788?e=1665619200&v=beta&t=lnjsCZ0wd7p7XNf60t5M2l9yYtuGE9g9NUulQqnDci4",

      linkedIn: "https://www.linkedin.com/in/yuval-bader/",
    },
  ]
  return (
    <>
      <Typography
        sx={{ display: "flex", justifyContent: "center", marginTop: "1vh",fontSize: "3.5vh" }}
      >
        {matches ? "Meet The Team" : ""}
      </Typography>
      <div className="aboutus_container">
        {data.map(({ fullName, title, image, linkedIn }, index) => (
          <Card
            sx={{ maxWidth: 345, width: "100%", m: matches ? "auto" : "0" }}
          >
            <>
              <CardContent key={index}>
                <CardMedia
                  image={image}
                  title={fullName}
                  sx={{
                    height: 200,
                    paddingTop: "56.25%",
                    margin: "auto",
                    marginBottom: "1rem",
                  }}
                />
                <Typography gutterBottom variant="h5" component="h2">
                  {fullName}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => window.open(linkedIn)} size="small">
                  LinkedIn
                </Button>
              </CardActions>
            </>
          </Card>
        ))}
      </div>
    </>
  )
}
