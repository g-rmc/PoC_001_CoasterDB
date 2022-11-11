--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.5 (Ubuntu 14.5-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: coasters; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.coasters (
    id integer NOT NULL,
    "rcdbLink" text,
    "coasterName" character varying(255) NOT NULL,
    "parkName" character varying(255),
    length integer,
    drop integer,
    speed integer,
    "openingYear" character varying(4)
);


--
-- Name: public.coasters_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."public.coasters_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: public.coasters_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."public.coasters_id_seq" OWNED BY public.coasters.id;


--
-- Name: coasters id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.coasters ALTER COLUMN id SET DEFAULT nextval('public."public.coasters_id_seq"'::regclass);


--
-- Data for Name: coasters; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.coasters VALUES (1, 'https://rcdb.com/1150.htm', 'Montezum', 'Hopi Hari', 1030, 42, 103, '1999');
INSERT INTO public.coasters VALUES (2, 'https://rcdb.com/4149.htm', 'Firewhip', 'Beto Carrero', 689, 33, 80, '2008');
INSERT INTO public.coasters VALUES (3, 'https://rcdb.com/3701.htm', 'Super Tornado', 'Mirabilandia', 350, 19, 60, '2008');


--
-- Name: public.coasters_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."public.coasters_id_seq"', 3, true);


--
-- Name: coasters coasters_pk; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.coasters
    ADD CONSTRAINT coasters_pk PRIMARY KEY (id);


--
-- Name: coasters public.coasters_rcdbLink_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.coasters
    ADD CONSTRAINT "public.coasters_rcdbLink_key" UNIQUE ("rcdbLink");


--
-- PostgreSQL database dump complete
--

