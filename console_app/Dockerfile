FROM openjdk:11-jdk as builder

WORKDIR /app

COPY Main.java .

RUN javac Main.java && jar cvfe Main.jar Main Main.class

FROM openjdk:11-jre-slim

WORKDIR /app

ENV MESSAGE="Hello From Docker!"

COPY --from=builder /app/Main.jar .

CMD ["java","-jar","Main.jar"]