FROM ruby:3.0.4

RUN apt-get update -qq && apt-get install -y nodejs default-mysql-client

WORKDIR /chat-app

COPY Gemfile .
COPY Gemfile.lock .

RUN bundle install

COPY . .

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
